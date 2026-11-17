# Aurelle Aesthetic Studio · landing page modelo (nicho: estética)

Landing page de mostruário para clínicas de estética. A marca **Aurelle Aesthetic Studio** é fictícia, e os contatos, números, nomes e registros profissionais são placeholders. As imagens foram geradas por IA.

Stack: React 18 + Vite 5 + TypeScript, CSS puro (um arquivo com variáveis) e nenhuma biblioteca de UI ou de ícones.

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build de produção em http://localhost:4173
npm run images    # regenera os WebP a partir das imagens originais
```

Requer Node 18 ou superior (desenvolvido com Node 22).

> **npm 11 ou superior:** o `package.json` já aprova (`allowScripts`) os scripts de instalação do `esbuild` e do `sharp`. Se o `npm install` ainda avisar sobre scripts bloqueados, rode `npm install-scripts approve esbuild sharp`.

## Estrutura

```
.
├── index.html                 # title, meta description, Open Graph, favicon, Google Fonts
├── public/
│   ├── favicon.svg
│   └── og-image.jpg           # 1200×630, gerada pelo script de imagens
├── scripts/
│   └── optimize-images.mjs    # PNG/JPG originais → WebP (2 larguras) + index.ts
├── src/
│   ├── config/site.ts         # NOME DA MARCA, WHATSAPP, telefone, e-mail, SEO
│   ├── data/content.ts        # TODOS os textos: hero, tratamentos, FAQ, equipe, depoimentos…
│   ├── assets/images/
│   │   ├── originais/         # imagens originais em PNG (não entram no bundle)
│   │   ├── *.webp             # versões otimizadas (geradas)
│   │   └── index.ts           # mapa de imagens com srcset/width/height (gerado)
│   ├── components/            # Header, Hero, Sections, Testimonials, Faq, Closing, Icon, Img
│   ├── App.tsx                # ordem das seções + animação de entrada ao rolar
│   └── styles.css             # paleta, tipografia e layout (mobile first)
├── PRODUCT.md                 # contexto de produto (para a skill de design)
└── .impeccable/               # direção de arte registrada (uso interno de desenvolvimento)
```

## Como reaproveitar em outro nicho

1. **Marca e WhatsApp:** edite `src/config/site.ts`. O número do WhatsApp existe **só** ali (`whatsappNumber`, só dígitos, com 55 e DDD). Todos os botões usam `whatsappLink(mensagem)`.
2. **Textos:** edite `src/data/content.ts`. Cada tratamento tem a própria `whatsappMessage`. Menu, FAQ, equipe, depoimentos, números, endereço e horários também estão nesse arquivo.
3. **Imagens:**
   - Coloque as novas fotos em `src/assets/images/originais/` com nomes em kebab-case (por exemplo, `hero-retrato.png`).
   - Rode `npm run images`. O script gera os WebP e reescreve `src/assets/images/index.ts`, transformando `hero-retrato` na chave `heroRetrato`.
   - Em `content.ts`, aponte cada seção para a chave da imagem e escreva o `alt`.
   - Se trocar o nome de algum arquivo, o TypeScript avisa as chaves que deixaram de existir.
   - Apague os WebP antigos que não forem mais usados.
4. **SEO:** atualize também o `<title>`, a description e as tags Open Graph em `index.html`. São estáticas para funcionar sem JavaScript.
5. **Cores e fontes:** ficam nas variáveis do topo de `src/styles.css` (`--marfim`, `--areia`, `--salvia`, `--espresso`, `--argila`…). A URL do Google Fonts está em `index.html`.
6. **Seções:** a ordem fica em `src/App.tsx`. Para remover uma seção, apague a linha correspondente.

## Imagens usadas

| Arquivo (originais/) | O que mostra | Onde aparece |
|---|---|---|
| `hero-retrato.png` | Mulher olhando por cima do ombro, sombras de folhas (vertical) | Hero (recorte em arco) |
| `tratamento-pele.png` | Aparelho de luz aplicado na bochecha | Card "Qualidade da pele" |
| `tratamento-facial.png` | Máscara verde aplicada com espátula | Card "Faciais de cuidado" |
| `tratamento-corporal.png` | Ultrassom estético no abdômen | Card "Contorno corporal" |
| `clinica-recepcao.png` | Recepção com balcão de pedra e oliveira | Seção "A clínica" |
| `consulta-avaliacao.png` | Profissional e paciente à mesa | "Como funciona" |
| `clinica-sala-tratamento.png` | Sala com maca e manta sálvia | "Estrutura e tecnologia" |
| `clinica-produtos.png` | Flat lay de séruns, creme e gua sha | "Estrutura e tecnologia" (foto sobreposta) |
| `equipe-medica-chefe.png` | Médica de jaleco | Equipe: Dra. Helena Vasconcellos |
| `equipe-biomedico.png` | Profissional de uniforme branco | Equipe: Rafael Monteverde |
| `depoimento-01/02/03.png` | Retratos quadrados de três mulheres | Depoimentos |
| `cta-final.png` | Mulher sorrindo com espaço vazio à direita | CTA final e imagem de compartilhamento (OG) |

O peso total caiu de cerca de 31 MB em PNG para 1,4 MB em WebP (duas larguras por imagem, servidas via `srcset`/`sizes`).

## Decisões tomadas sem consulta

- **Imagens:**
  - Os papéis foram atribuídos visualmente, conforme a tabela acima.
  - O retrato horizontal da mulher sorrindo (`cta-final`) é o único com espaço vazio à direita, por isso foi para o CTA final.
  - O retrato vertical com sombras de folhas (`hero-retrato`) virou o hero.
- **Originais:** os PNG ficam no repositório, em `src/assets/images/originais/`, para permitir regerar os WebP. Eles não são importados, então não entram no bundle.
- **Contraste AA com a argila:**
  - A argila `#B98B6B` sobre marfim dá só 2,7:1, abaixo do mínimo para texto. Por isso ela ficou nos detalhes: linhas, ícones, selo, pino do mapa e números grandes sobre o escuro.
  - Para botões e textos pequenos criei dois tons derivados:
    - `--argila-profunda: #8E6447`, com 4,7:1 sobre o marfim.
    - `--argila-texto: #7E573C`, com 4,6:1 sobre a areia.
- **Direção de arte:**
  - O conceito é "a luz de um dia na clínica": a página vai do marfim (manhã) à areia (tarde) e termina no espresso e no sálvia escuro (fim do dia).
  - O hero usa foto com topo em arco, que ecoa o arco da recepção, sobre um bloco de areia deslocado e com contorno fino em argila. O selo circular gira devagar na borda da foto.
  - Em relação à referência, mudei a paleta, o layout de cada bloco, o selo (monograma "A") e todos os textos. A pasta `referencia/` está no `.gitignore`.
- **Rótulos:** os rótulos em caixa alta com espaçamento aparecem em botões, menu, metadados dos cards e faixa de confiança. Não usei "sobretítulos" acima dos títulos, para fugir do visual de template.
- **Tratamentos:** os três cards têm alturas e deslocamentos diferentes no desktop, para não parecerem uma grade de template. No mobile ficam empilhados.
- **Depoimentos:** no desktop o card do meio fica escuro e deslocado. No mobile vira carrossel com scroll-snap e botões anterior/próximo.
- **Menu:**
  - Até 1199px a navegação usa o menu hambúrguer, porque com 7 links ela não cabe bem em 1024px.
  - O botão "Agendar avaliação" do header aparece a partir de 768px.
- **Botão flutuante de WhatsApp:**
  - Só existe abaixo de 1024px.
  - Aparece depois que os botões do hero saem da tela, para não ficar sobre o próprio CTA.
  - O rodapé tem um espaço extra embaixo para o botão não cobrir o conteúdo.
- **Ícones e mapa:**
  - Os ícones são SVG inline desenhados no projeto, com traço de 1,25. Não usei `lucide-react`, para não adicionar dependência.
  - No WhatsApp usei um balão de conversa genérico, para não usar o logotipo da marca de terceiros.
- **Redes sociais e mapa:** as redes sociais aparecem só como texto, sem logotipos. O mapa é um SVG geométrico ilustrativo, sem iframe.
- **Conteúdo inventado:**
  - Endereço "Rua das Magnólias, 412 · Cambuí".
  - Números "11 anos · 8.460 atendimentos · 4,9/5", marcados como ilustrativos.
  - Registros "CRM-SP 000000 · exemplo" e "CRBM 00000 · exemplo".
  - Depoimentos marcados como ilustrativos.
- **Animação:**
  - O conteúdo é visível por padrão. A entrada (fade com leve deslocamento, cortina nas fotos grandes) só é ativada quando há `IntersectionObserver` e o usuário não pediu movimento reduzido.
  - Com `prefers-reduced-motion`, o selo para de girar e as transições são desligadas.
- **Acordeão:** a primeira pergunta do FAQ vem aberta. O acordeão usa botões nativos com `aria-expanded`/`aria-controls`, e o conteúdo fechado fica fora da leitura e da navegação por Tab.

## Verificação feita

- `npm run build` passou sem erros nem avisos.
- Testei com o Playwright em 360, 390, 768, 1024 e 1440px:
  - nenhuma largura teve scroll horizontal;
  - todas as imagens carregaram;
  - todos os links e botões interativos têm pelo menos 44px.
- O menu mobile foi testado pelo teclado: o foco vai para o primeiro link, o Esc fecha e devolve o foco ao botão.
- O detector de padrões de design (Impeccable) não encontrou nada.
