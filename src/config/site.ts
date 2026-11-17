/**
 * Configuração da marca. Para reaproveitar o projeto em outro nicho,
 * troque os dados aqui e em src/data/content.ts.
 *
 * O WhatsApp fica definido SOMENTE neste arquivo.
 */
export const site = {
  brand: 'Aurelle',
  brandFull: 'Aurelle Aesthetic Studio',
  tagline: 'Aesthetic Studio',
  city: 'Campinas – SP',

  /** Número no formato internacional, só dígitos (placeholder claramente falso). */
  whatsappNumber: '5519900000000',
  /** Como o número aparece na tela. */
  whatsappDisplay: '(19) 90000-0000',
  phoneDisplay: '(19) 3000-0000',
  email: 'contato@aurelle.exemplo',

  /** Mensagem padrão dos botões de agendamento. */
  defaultMessage: 'Olá! Vim pelo site e gostaria de agendar uma avaliação na Aurelle.',

  seo: {
    title: 'Aurelle Aesthetic Studio | Estética com resultado natural em Campinas',
    description:
      'Clínica de estética em Campinas com tratamentos de pele, faciais e corporais planejados a partir de uma avaliação individual. Agende pelo WhatsApp.',
  },
} as const;

/** Monta o link wa.me com mensagem pré-preenchida. */
export function whatsappLink(message: string = site.defaultMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
