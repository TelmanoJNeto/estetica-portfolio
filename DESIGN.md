---
name: Aurelle Aesthetic Studio
description: Landing editorial de clínica de estética que caminha da luz da manhã à luz do fim do dia.
colors:
  marfim: "#F7F3EC"
  areia: "#E6DCCB"
  salvia: "#8A9A82"
  salvia-escuro: "#5F7058"
  espresso: "#3A2D26"
  espresso-profundo: "#2B211C"
  argila: "#B98B6B"
  argila-profunda: "#8E6447"
  argila-texto: "#7E573C"
  texto-suave: "#6B5A50"
  linha: "rgb(58 45 38 / 0.16)"
  linha-clara: "rgb(247 243 236 / 0.22)"
typography:
  display:
    fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 2.1rem + 4.4vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.6rem, 1.9rem + 3vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline-md:
    fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.3rem, 1.8rem + 2.2vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.8rem, 1.6rem + 0.8vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.08
  quote:
    fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.3rem, 1.2rem + 0.4vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.3
  numeral:
    fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
    fontSize: "2.75rem"
    fontWeight: 300
    lineHeight: 0.9
  lead:
    fontFamily: "'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.02rem, 0.98rem + 0.2vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  label:
    fontFamily: "'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  sm: "8px"
  md: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section-y: "clamp(5rem, 3.5rem + 6vw, 9.5rem)"
  container-max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.argila-profunda}"
    textColor: "{colors.marfim}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.marfim}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.espresso}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.marfim}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.25rem"
    height: "44px"
  link-arrow:
    textColor: "{colors.argila-texto}"
    height: "44px"
  link-arrow-hover:
    textColor: "{colors.espresso}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    size: "48px"
  icon-button-hover:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.marfim}"
  chip-registro:
    textColor: "{colors.argila-texto}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.7rem"
  media-frame:
    rounded: "{rounded.md}"
  quote-card:
    backgroundColor: "{colors.marfim}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.md}"
  quote-card-destaque:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.marfim}"
    rounded: "{rounded.md}"
  fab-whatsapp:
    backgroundColor: "{colors.argila-profunda}"
    textColor: "{colors.marfim}"
    size: "60px"
  fab-whatsapp-hover:
    backgroundColor: "{colors.espresso}"
  section-sand:
    backgroundColor: "{colors.areia}"
    textColor: "{colors.espresso}"
  section-dark:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.marfim}"
  section-sage:
    backgroundColor: "{colors.salvia-escuro}"
    textColor: "{colors.marfim}"
---

# Design System: Aurelle Aesthetic Studio

## Overview

**Creative North Star: "A Luz de um Dia na Clínica"**

O sistema é a luz de um dia inteiro dentro de uma clínica calma: começa no marfim da manhã, passa pela areia da tarde e termina no espresso do fim do dia, acompanhando o dourado das próprias fotografias. A página não é um feed de blocos; é uma sequência de faixas tonais com ritmo de revista, em que cada seção muda a temperatura da luz em vez de empilhar cartões. O tom visual é sofisticado e acolhedor, sem brilho clínico e sem promessa milagrosa.

A densidade é baixa e editorial. Títulos em Cormorant Garamond leve e grande carregam a voz; Manrope fica no texto corrido e nos controles. A estrutura vem de linhas finas de 1px em espresso translúcido, não de caixas, sombras ou preenchimentos. As fotografias são o material principal: recortadas com topo em arco no hero (ecoando o arco da recepção) e com cantos de 14px no resto, sempre com luz natural e pessoas reais, nunca antes/depois.

O movimento é lento e sem pressa: entradas suaves ao rolar com uma curva de desaceleração longa, linhas do título surgindo do desfoque, um selo circular que gira em 48s. Tudo respeita `prefers-reduced-motion` e o conteúdo é visível por padrão, sem depender de JavaScript.

**Key Characteristics:**
- Faixas tonais em sequência de luz: marfim → areia → espresso → sálvia escuro → areia → espresso.
- Serifa display leve e grande contra sans neutra; itálico serif como acento de voz.
- Estrutura por linhas de 1px, não por cartões ou sombras.
- Fotografia em arco (hero) e cantos de 14px (demais recortes).
- Grupos de itens pares desalinhados verticalmente, nunca em fileira idêntica.
- Rótulos em caixa alta com tracking apenas em controles e metadados.
- Movimento lento, de desaceleração longa, todo desligável.

## Colors

Uma paleta quente e terrosa, de baixa saturação, fixada pelo briefing; os únicos acréscimos são derivados escuros de argila e um cinza-espresso para texto, criados para passar AA.

### Primary
- **Argila Profunda** (argila-profunda): a cor de ação. Fundo de todo botão primário e do botão flutuante de WhatsApp, última linha em itálico do título do hero, numerais dos passos, ícone do acordeão. Com marfim por cima chega a 4,7:1.
- **Argila Texto** (argila-texto): a versão de texto pequeno da argila. Rótulos de metadado, links com seta, chip de registro profissional. 5,7:1 no marfim, 4,7:1 na areia.
- **Argila** (argila): a argila pura do briefing, só para traços e acentos não textuais ou texto grande em fundo escuro: o arco de linha fina atrás da foto do hero, o anel interno do selo, a rota pontilhada e o pino do mapa, a unidade em itálico das estatísticas sobre espresso, a barra de rolagem.

### Secondary
- **Sálvia Escuro** (salvia-escuro): a faixa verde da seção de estrutura (com texto marfim a 4,8:1), os ícones de traço da faixa de confiança, a seleção de texto, o parque no mapa.
- **Sálvia** (salvia): sálvia clara do briefing. Declarada mas ainda sem uso em superfícies; com 2,7:1 sobre marfim, fica reservada a preenchimentos decorativos ou ilustração, nunca a texto.

### Neutral
- **Marfim** (marfim): a luz da manhã. Fundo da página, do cabeçalho fixo (a 94% com desfoque), do menu móvel, dos cartões de depoimento e cor de texto sobre todas as faixas escuras.
- **Areia** (areia): a luz da tarde. Faixas de tratamentos e depoimentos, bloco deslocado atrás da foto do hero, fundo do CTA final no desktop, cor de rótulo e foco sobre fundos escuros.
- **Espresso** (espresso): o fim do dia e a cor de todo texto principal. Faixas escuras (sobre a clínica, rodapé, CTA final no mobile), cartão de depoimento em destaque, estado hover dos botões. 12:1 com marfim.
- **Espresso Profundo** (espresso-profundo): só o véu em gradiente sobre a foto do CTA final no mobile e a sombra do botão flutuante.
- **Texto Suave** (texto-suave): texto secundário em fundo claro: leads, corpo dos tratamentos, bios, metadados. 5,9:1 no marfim, 4,8:1 na areia.
- **Linha** (linha) e **Linha Clara** (linha-clara): as linhas de 1px que estruturam tudo; espresso a 16% em fundos claros, marfim a 22% em fundos escuros.

### Named Rules
**Regra da Luz do Dia.** As faixas de seção avançam em temperatura de luz, do marfim ao espresso. Uma seção nova escolhe sua faixa pelo momento da narrativa, nunca repete a cor da faixa vizinha.

**Regra da Argila Legível.** A argila pura (#B98B6B, 2,7:1 no marfim) nunca carrega texto em fundo claro. Botão usa argila profunda; texto pequeno usa argila texto.

**Regra da Paleta Fechada.** Nenhuma cor fora destes tokens. Tons novos saem de transparências de espresso ou marfim, não de hex inventados.

## Typography

**Display Font:** Cormorant Garamond (com Cormorant, Georgia, Times New Roman)
**Body Font:** Manrope (com system-ui, -apple-system, Segoe UI)

**Character:** Uma serifa de alto contraste, leve e grande, que soa como a capa de uma revista de bem-estar, apoiada por uma sans geométrica e calma que nunca disputa atenção. O itálico da serifa é a voz emocional: última linha do hero, depoimentos, numerais, unidades.

### Hierarchy
- **Display** (300, clamp 3rem → 6rem, 0.94): só o título do hero, em três linhas, a última em itálico argila profunda.
- **Headline** (400, clamp 2.6rem → 4.5rem, 1): títulos de seção, com `text-wrap: balance`.
- **Headline MD** (400, clamp 2.3rem → 3.6rem, 1.04): títulos de seção em colunas mais estreitas (sobre a clínica, estrutura, rodapé).
- **Title** (400, clamp 1.8rem → 2.25rem, 1.08): títulos de tratamento, passos, nomes da equipe; perguntas do FAQ numa variação menor (1.35rem → 1.7rem).
- **Quote** (400 itálico, clamp 1.3rem → 1.5rem, 1.3): texto de depoimento entre aspas tipográficas.
- **Numeral** (300 itálico, 2.75rem, 3.6rem no desktop, 0.9): números dos passos e, em versão de 2.4rem → 3.1rem com algarismos tabulares, as estatísticas.
- **Lead** (400, clamp 1.02rem → 1.12rem, 1.65, máx. 46ch): parágrafo de abertura de seção, em texto suave.
- **Body** (400, 1rem, 1.65): texto corrido; medida entre 40ch e 62ch.
- **Button** (600, 0.8rem, 0.14em, caixa alta): botões e navegação do desktop (0.72rem).
- **Label** (600, 0.72rem, 0.18em, caixa alta): metadados de tratamento, títulos da faixa de confiança, cabeçalhos de bloco do rodapé, chip de registro.

### Named Rules
**Regra do Rótulo no Lugar.** Caixa alta com tracking (0.12em a 0.18em) só em controles e metadados. Nunca como sobretítulo acima de um título de seção: o título serif abre a seção sozinho.

**Regra do Itálico Contado.** O itálico serif é acento, não estilo de bloco: uma linha por título, numerais, unidades e depoimentos. Corpo em Manrope nunca vai a itálico.

## Layout

Mobile primeiro. O contêiner tem largura máxima de 1320px com margem lateral fluida (gutter, 1.25rem a 3rem), e as seções respiram com padding vertical fluido (section-y, 5rem a 9.5rem). O cabeçalho fixo tem 68px no mobile e 84px a partir de 1024px; a rolagem por âncora compensa essa altura.

No desktop as seções usam divisões assimétricas, nunca metades iguais: hero 1fr / 0.92fr, sobre a clínica e estrutura 7/5, processo 5/6, equipe 4/8, FAQ 5/7, CTA final com texto nas colunas 8 a 12 de uma grade de 12. Colunas de introdução ficam fixas (`position: sticky`) enquanto a lista ao lado rola, em processo e equipe. A foto da seção sobre a clínica sangra até a borda esquerda da viewport.

Pontos de quebra observados: 640px (duas colunas em equipe e tratamentos), 768px (CTA no cabeçalho, rodapé em três colunas), 900px (faixa de confiança em quatro colunas, tratamentos em três, depoimentos viram grade), 1024px (layouts de colunas e hero lado a lado), 1200px (navegação completa substitui o menu), 1440px (sangria da foto calculada a partir da largura máxima).

No mobile o hero inverte a ordem: arco no topo, texto abaixo, CTA visível na primeira tela. Depoimentos viram carrossel horizontal com snap (84% de largura por cartão) e controles próprios. Um botão flutuante de WhatsApp aparece no mobile depois do hero.

### Named Rules
**Regra do Desalinho.** Itens pares (tratamentos, equipe, depoimentos) nunca ficam numa fileira idêntica: o segundo item desce 4rem a 7rem e as proporções das fotos variam entre itens (3/4.1, 3/3.7, 3/3.9).

## Elevation & Depth

O sistema é plano. Profundidade vem de camadas tonais (faixas de seção, o bloco de areia deslocado atrás do arco do hero, a foto de produtos sobreposta à foto da sala com uma borda da cor da própria seção) e de linhas de 1px. Sombras existem só em objetos que flutuam sobre o conteúdo, sempre difusas, quentes e com espalhamento negativo.

### Shadow Vocabulary
- **Selo flutuante** (`box-shadow: 0 10px 30px -12px rgb(58 45 38 / 0.35)`): o selo circular sobre a borda da foto do hero.
- **Botão flutuante** (`box-shadow: 0 12px 28px -10px rgb(43 33 28 / 0.55)`): o botão de WhatsApp fixo no mobile.
- **Linha do cabeçalho** (`box-shadow: 0 1px 0 rgb(58 45 38 / 0.16)`): não é sombra de elevação, é a linha de 1px que surge quando o cabeçalho fica sólido.

### Named Rules
**Regra da Linha Antes da Sombra.** Separação entre conteúdos se faz com linha de 1px ou troca de faixa tonal. Sombra só para o que flutua (selo, botão fixo), nunca para cartões em repouso.

## Shapes

Três formas carregam o sistema. O **arco**: topo em semicírculo e base com cantos de 14px (`border-radius: 50cqi 50cqi 14px 14px`, via container query), usado na foto do hero e repetido em linha fina de argila deslocada atrás dela. O **recorte suave**: 14px (rounded.md) em toda foto, cartão de depoimento e bloco de fundo; a foto que sangra até a borda perde o raio do lado da borda. A **pílula e o círculo**: 999px em botões, botões de ícone e chips; círculo perfeito no selo e no botão flutuante.

Bordas são sempre de 1px (linha ou argila a 35% no botão fantasma), exceto a moldura de 6px a 8px da cor da seção que separa a foto sobreposta. Ícones são desenhados à mão em 24×24 com traço de 1.25, sem preenchimento. O anel de foco tem 2px de argila profunda (areia em fundos escuros), 3px de afastamento e 4px de raio.

## Components

### Buttons
Calmos e táteis: pílula alta, rótulo pequeno em caixa alta, transição lenta de cor.
- **Shape:** pílula (999px), altura mínima de 52px; versão compacta de 44px.
- **Primary:** fundo argila profunda, texto marfim, padding 0.85rem × 1.6rem, ícone de conversa de 20px antes do rótulo.
- **Hover / Focus:** fundo passa a espresso em 0.35s com a curva de desaceleração; no clique desce 1px e reduz a 0.99. Dentro do CTA final no mobile o hover inverte para marfim com texto espresso.
- **Ghost:** transparente, texto espresso, borda de 1px espresso a 35%; no hover vira espresso cheio e a seta final avança 3px.
- **Link com seta:** rótulo em argila texto com sublinhado de 1px na cor do texto, seta que avança 4px no hover; o texto passa a espresso.
- **Botão de ícone:** círculo de 48px com borda espresso a 30%, preenche de espresso no hover; desabilitado a 35% de opacidade.

### Chips
- **Style:** chip de registro profissional: pílula com borda de 1px (linha), rótulo de 0.7rem em caixa alta, 0.12em de tracking, argila texto.
- **State:** estático, sem estados de seleção.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** cartão de depoimento em marfim sobre a faixa de areia; no desktop o cartão do meio desce 4rem e vira espresso com texto marfim.
- **Shadow Strategy:** nenhuma (ver Elevation & Depth).
- **Border:** nenhuma; a assinatura do depoimento é separada por linha de 1px.
- **Internal Padding:** 1.75rem × 1.5rem; foto no topo em 5/4 sem padding.

### Navigation
- **Desktop (a partir de 1200px):** links em Manrope 500, 0.72rem, caixa alta, 0.14em; sublinhado de 1px que cresce da esquerda no hover em 0.45s e recua para a direita. CTA compacto à direita a partir de 768px.
- **Cabeçalho:** transparente sobre o hero; ao rolar fica marfim a 94% com desfoque de 12px e linha de 1px.
- **Mobile:** botão de menu de 48px abre um painel marfim de altura total, com links em Cormorant 1.75rem separados por linhas, entrando com cortina de 12% e fade em 0.45s.

### Acordeão (FAQ)
Perguntas em serif (1.35rem → 1.7rem) em linhas de no mínimo 72px separadas por linhas de 1px; o sinal de mais em argila profunda gira 45° ao abrir, e o painel expande por `grid-template-rows` em 0.5s. Hover tinge a pergunta de argila profunda.

### Arco do Hero (assinatura)
Foto em arco sobre um bloco de areia deslocado para baixo e à direita, com um contorno em arco de 1px de argila a 60% deslocado para cima e à direita. A foto entra com leve zoom de 1.08 e dessaturação. Um selo circular marfim de 104px (148px no desktop) atravessa a borda esquerda da foto: texto em caixa alta girando em 48s ao redor de um monograma serif itálico em argila profunda.

### Faixas de linha (confiança, passos, estatísticas, checklist)
O padrão de lista do sistema: itens separados por linhas de 1px, sem caixa. Na faixa de confiança, ícone de traço em sálvia escuro + rótulo + texto, em quatro colunas divididas por linhas verticais. Nos passos, numeral serif itálico grande em argila profunda à esquerda. Nas estatísticas sobre espresso, número serif em areia com unidade em itálico argila.

## Do's and Don'ts

### Do:
- **Do:** escolha a faixa de cada nova seção pela sequência de luz (marfim, areia, espresso, sálvia escuro) e alterne com a vizinha.
- **Do:** separe conteúdo com linhas de 1px (linha em fundo claro, linha clara em fundo escuro) antes de pensar em caixa ou sombra.
- **Do:** recorte toda foto com 14px; reserve o arco (50cqi no topo) para a foto principal de uma seção de abertura.
- **Do:** use argila profunda para botões e argila texto para rótulos pequenos; argila pura só em traços e acentos.
- **Do:** desalinhe verticalmente itens pares (4rem a 7rem) e varie as proporções das fotos entre eles.
- **Do:** use a curva cubic-bezier(0.16, 1, 0.3, 1) com durações de 0.35s (estado) a 1.3s (entrada), e mantenha tudo desligável em `prefers-reduced-motion`.
- **Do:** mantenha alvos de toque com no mínimo 44px e o anel de foco de 2px argila profunda (areia no escuro).

### Don't:
- **Don't:** coloque rótulo em caixa alta com tracking como sobretítulo acima de um título de seção.
- **Don't:** use argila pura (#B98B6B) ou sálvia clara (#8A9A82) para texto em fundo claro.
- **Don't:** use sombras duras, deslocadas ou em cartões em repouso; sombra só em objetos flutuantes, difusa e quente.
- **Don't:** introduza hex fora da paleta; tons intermediários saem de transparências de espresso ou marfim.
- **Don't:** use imagens de antes/depois ou fotos com luz clínica fria; as fotos seguem luz natural e dourada.
- **Don't:** use ícones de fonte, emoji ou ícones preenchidos; ícones são traços de 1.25 em 24×24.
- **Don't:** leve o corpo em Manrope a itálico nem os títulos serif a peso acima de 500.
