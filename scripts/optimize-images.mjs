/**
 * Gera versões WebP otimizadas a partir de src/assets/images/originais/*.png|jpg
 * e escreve src/assets/images/index.ts com src, srcSet, width e height.
 * Uso: npm run images
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const srcDir = path.join(root, 'src/assets/images/originais');
const outDir = path.join(root, 'src/assets/images');
const QUALITY = 76;

const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const files = fs.readdirSync(srcDir).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort();

const imports = [];
const entries = [];

for (const file of files) {
  const name = file.replace(/\.(png|jpe?g)$/i, '');
  const input = path.join(srcDir, file);
  const { width, height } = await sharp(input).metadata();
  const square = width === height;
  const targets = (square ? [480, 960] : [720, 1440]).map((w) => Math.min(w, width));
  const unique = [...new Set(targets)];
  const vars = [];
  for (const w of unique) {
    const outName = `${name}-${w}.webp`;
    await sharp(input).resize({ width: w }).webp({ quality: QUALITY, effort: 5 }).toFile(path.join(outDir, outName));
    const v = `${camel(name)}${w}`;
    imports.push(`import ${v} from './${outName}';`);
    vars.push({ v, w });
  }
  const largest = vars[vars.length - 1].v;
  entries.push(
    `  ${camel(name)}: { src: ${largest}, srcSet: \`${vars.map(({ v, w }) => `\${${v}} ${w}w`).join(', ')}\`, width: ${width}, height: ${height} },`
  );
  console.log(`ok  ${file} -> ${unique.map((w) => `${name}-${w}.webp`).join(', ')}`);
}

// Imagem de compartilhamento (Open Graph) 1200x630 a partir do hero
await sharp(path.join(srcDir, 'cta-final.png'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(root, 'public/og-image.jpg'));

const ts = `// Arquivo gerado por scripts/optimize-images.mjs. Não edite à mão: rode \`npm run images\`.
${imports.join('\n')}

export type ImageAsset = { src: string; srcSet: string; width: number; height: number };

export const images = {
${entries.join('\n')}
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
`;
fs.writeFileSync(path.join(outDir, 'index.ts'), ts);
console.log('ok  src/assets/images/index.ts');
