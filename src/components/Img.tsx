import { images } from '../assets/images';
import type { Photo } from '../data/content';

type Props = Photo & {
  /** Valor do atributo sizes (largura em que a imagem é exibida). */
  sizes: string;
  /** true apenas para a imagem acima da dobra (hero). */
  priority?: boolean;
  className?: string;
};

/** Imagem responsiva com srcset WebP, dimensões fixas (sem layout shift) e lazy loading. */
export function Img({ image, alt, sizes, priority = false, className }: Props) {
  const asset = images[image];
  return (
    <img
      className={className}
      src={asset.src}
      srcSet={asset.srcSet}
      sizes={sizes}
      width={asset.width}
      height={asset.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      {...(priority ? { fetchpriority: 'high' } : {})}
    />
  );
}
