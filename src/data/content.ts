/**
 * Todo o conteúdo da página. Para outro nicho, troque os textos e as chaves
 * de imagem (as chaves vêm de src/assets/images/index.ts, gerado por `npm run images`).
 */
import type { ImageKey } from '../assets/images';
import type { IconName } from '../components/Icon';

export type Photo = { image: ImageKey; alt: string };

export const nav = [
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'A clínica', href: '#clinica' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

export const hero = {
  titleLines: ['Beleza que', 'continua', 'sendo sua.'],
  subtitle:
    'Tratamentos de pele, faciais e corporais planejados a partir de uma avaliação individual, com tecnologia atual e mãos que sabem a hora de parar.',
  primaryCta: 'Agendar avaliação',
  secondaryCta: 'Ver tratamentos',
  seal: 'Abordagem científica · Beleza natural · ',
  photo: {
    image: 'heroRetrato',
    alt: 'Mulher de cabelos escuros presos olha por cima do ombro, com sombras de folhas na parede clara ao fundo.',
  } satisfies Photo,
  note: 'Avaliação presencial de 50 minutos, sem compromisso de fechar tratamento.',
};

export const trust: { icon: IconName; title: string; text: string }[] = [
  { icon: 'badge', title: 'Profissionais certificados', text: 'Equipe com registro ativo e formação contínua.' },
  { icon: 'spark', title: 'Tecnologia avançada', text: 'Equipamentos registrados e calibrados a cada semestre.' },
  { icon: 'hand', title: 'Cuidado personalizado', text: 'Plano desenhado para a sua pele e a sua rotina.' },
  { icon: 'leaf', title: 'Resultados naturais', text: 'Mudanças graduais, que respeitam os seus traços.' },
];

export const treatmentsIntro = {
  title: 'Tratamentos',
  text: 'Três frentes de cuidado, sempre combinadas a partir do que a avaliação mostrar. Nada de pacote pronto: o protocolo é montado para você.',
};

export const treatments: {
  id: string;
  label: string;
  title: string;
  text: string;
  duration: string;
  photo: Photo;
  whatsappMessage: string;
}[] = [
  {
    id: 'pele',
    label: 'Pele',
    title: 'Qualidade da pele',
    text: 'Protocolos com luz e radiofrequência para textura, viço e uniformidade do tom, ajustados ao seu tipo de pele e à estação do ano.',
    duration: 'Sessões de 40 a 60 min',
    photo: {
      image: 'tratamentoPele',
      alt: 'Profissional de luvas aplica um aparelho de luz suave na bochecha de uma mulher de olhos fechados.',
    },
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os tratamentos de qualidade da pele da Aurelle.',
  },
  {
    id: 'facial',
    label: 'Facial',
    title: 'Faciais de cuidado',
    text: 'Limpeza profunda, hidratação e máscaras de ativos em um ritual de uma hora, para uma pele limpa, nutrida e com aparência descansada.',
    duration: 'Ritual de 60 min',
    photo: {
      image: 'tratamentoFacial',
      alt: 'Mulher deitada com toalha na cabeça recebe uma máscara facial verde aplicada com espátula.',
    },
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os tratamentos faciais da Aurelle.',
  },
  {
    id: 'corporal',
    label: 'Corporal',
    title: 'Contorno corporal',
    text: 'Tecnologias não invasivas associadas à drenagem e ao cuidado da pele do corpo, com metas realistas definidas já na avaliação.',
    duration: 'Sessões de 50 min',
    photo: {
      image: 'tratamentoCorporal',
      alt: 'Profissional de luvas desliza um aparelho de ultrassom estético sobre o abdômen de uma paciente.',
    },
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os tratamentos corporais da Aurelle.',
  },
];

export const about = {
  title: 'Um espaço pensado para desacelerar',
  paragraphs: [
    'A Aurelle nasceu da ideia de que cuidar da aparência não precisa ser apressado nem exagerado. A clínica fica numa casa reformada no Cambuí, com luz natural em todas as salas e atendimento com hora marcada, sem sala de espera cheia.',
    'Cada tratamento começa por uma conversa. Ouvimos o que incomoda, explicamos o que é possível e o que não vale a pena, e só então indicamos um caminho.',
  ],
  photo: {
    image: 'clinicaRecepcao',
    alt: 'Recepção da clínica com balcão de pedra clara, poltronas curvas, uma oliveira em vaso e luz dourada entrando pelas cortinas.',
  } satisfies Photo,
  stats: [
    { value: '11', unit: 'anos', label: 'de clínica em Campinas' },
    { value: '8.460', unit: '', label: 'atendimentos realizados' },
    { value: '4,9', unit: '/5', label: 'avaliação média das pacientes' },
  ],
  statsNote: 'Números ilustrativos de uma marca fictícia.',
};

export const process = {
  title: 'Como funciona',
  text: 'Do primeiro contato ao acompanhamento, você sabe o que vai acontecer em cada etapa.',
  photo: {
    image: 'consultaAvaliacao',
    alt: 'Profissional de jaleco conversa com uma paciente em uma mesa redonda, ao lado de uma janela com plantas.',
  } satisfies Photo,
  steps: [
    {
      title: 'Avaliação',
      text: 'Uma conversa de 50 minutos com análise da pele, histórico de saúde e o que você espera do tratamento.',
    },
    {
      title: 'Plano personalizado',
      text: 'Você recebe por escrito o protocolo indicado, o número estimado de sessões e o investimento, sem pressa para decidir.',
    },
    {
      title: 'Tratamento',
      text: 'Sessões em sala individual, com os mesmos profissionais do início ao fim e cuidados explicados para casa.',
    },
    {
      title: 'Acompanhamento',
      text: 'Retornos programados e fotos comparativas feitas na clínica para ajustar o plano conforme a resposta da sua pele.',
    },
  ],
};

export const structure = {
  title: 'Estrutura e tecnologia',
  text: 'Salas individuais, equipamentos com registro na Anvisa e produtos escolhidos pela formulação, não pela embalagem.',
  roomPhoto: {
    image: 'clinicaSalaTratamento',
    alt: 'Sala de tratamento clara com maca coberta por manta verde-sálvia, aparelho estético e planta ao lado da janela.',
  } satisfies Photo,
  productsPhoto: {
    image: 'clinicaProdutos',
    alt: 'Frascos de sérum, pote de creme e pedra gua sha verde dispostos sobre pedra travertino com folhas de eucalipto.',
  } satisfies Photo,
  items: [
    'Salas individuais com ventilação e luz natural',
    'Equipamentos registrados e com manutenção semestral',
    'Materiais descartáveis e protocolo de biossegurança',
    'Dermocosméticos de uso profissional, sem testes em animais',
    'Prontuário digital com fotos de acompanhamento',
    'Estacionamento conveniado a 50 metros',
  ],
};

export const team = {
  title: 'Quem cuida de você',
  text: 'Uma equipe pequena de propósito. Você é atendida pelas mesmas pessoas do início ao fim.',
  members: [
    {
      name: 'Dra. Helena Vasconcellos',
      role: 'Médica responsável técnica',
      registry: 'CRM-SP 000000 · exemplo',
      bio: 'Pós-graduada em medicina estética, conduz as avaliações e os protocolos que envolvem procedimentos médicos.',
      photo: {
        image: 'equipeMedicaChefe',
        alt: 'Médica de cabelos castanhos ondulados e jaleco branco, sorrindo em uma sala clara com plantas.',
      } satisfies Photo,
    },
    {
      name: 'Rafael Monteverde',
      role: 'Biomédico esteta',
      registry: 'CRBM 00000 · exemplo',
      bio: 'Responsável pelos protocolos com tecnologia e pelo acompanhamento das sessões de pele e corporais.',
      photo: {
        image: 'equipeBiomedico',
        alt: 'Biomédico de barba curta e uniforme branco, com as mãos juntas, em pé numa sala de tratamento.',
      } satisfies Photo,
    },
  ],
};

export const testimonials = {
  title: 'O que dizem as pacientes',
  note: 'Depoimentos ilustrativos.',
  items: [
    {
      name: 'Marlene Sabino',
      age: 58,
      treatment: 'Qualidade da pele',
      quote:
        'Fui com medo de sair com o rosto diferente. Saí com a minha cara, só que descansada. A Dra. Helena me disse o que não valia a pena fazer, e isso me ganhou.',
      photo: {
        image: 'depoimento01',
        alt: 'Retrato de mulher madura de cabelos grisalhos na altura do queixo, sorrindo.',
      } satisfies Photo,
    },
    {
      name: 'Luíza Andrade Peixoto',
      age: 41,
      treatment: 'Faciais de cuidado',
      quote:
        'Faço o facial uma vez por mês desde o ano passado. A pele ficou mais uniforme aos poucos, e a hora na sala virou o meu momento de silêncio.',
      photo: {
        image: 'depoimento02',
        alt: 'Retrato de mulher de cabelos castanhos ondulados na altura dos ombros, sorrindo.',
      } satisfies Photo,
    },
    {
      name: 'Tainá Coutinho',
      age: 34,
      treatment: 'Contorno corporal',
      quote:
        'Gostei de ouvir metas realistas logo na primeira consulta. Foram oito sessões, com fotos a cada retorno, e deu para ver a evolução sem exagero.',
      photo: {
        image: 'depoimento03',
        alt: 'Retrato de mulher de cabelos cacheados volumosos, sorrindo abertamente.',
      } satisfies Photo,
    },
  ],
};

export const faq = {
  title: 'Dúvidas frequentes',
  text: 'Não encontrou o que procurava? Fale com a nossa equipe pelo WhatsApp.',
  items: [
    {
      q: 'Os procedimentos doem?',
      a: 'A maioria dos tratamentos de pele e corporais causa no máximo um leve calor ou formigamento. Quando há algum desconforto previsto, usamos anestésico tópico e explicamos antes cada sensação, para você decidir com tranquilidade.',
    },
    {
      q: 'Quanto tempo leva a recuperação?',
      a: 'Faciais e tecnologias não invasivas permitem voltar à rotina no mesmo dia. Alguns protocolos deixam vermelhidão por algumas horas ou até dois dias. O tempo previsto para o seu caso aparece no plano entregue na avaliação.',
    },
    {
      q: 'Quantas sessões vou precisar?',
      a: 'Depende do objetivo e da resposta da sua pele. Em geral, protocolos de pele levam de 3 a 6 sessões e corporais de 6 a 10. Você recebe uma estimativa por escrito e reavaliamos a cada retorno.',
    },
    {
      q: 'Existe alguma contraindicação?',
      a: 'Sim. Gestação, amamentação, uso de alguns medicamentos, doenças de pele ativas e certas condições de saúde podem impedir ou adiar um tratamento. Por isso todo plano começa com avaliação e histórico de saúde.',
    },
    {
      q: 'Quais são as formas de pagamento?',
      a: 'Pix, cartão de débito e crédito em até 6 vezes sem juros nos protocolos. A avaliação é paga à parte e o valor é abatido se você iniciar o tratamento em até 30 dias.',
    },
    {
      q: 'Como faço para agendar?',
      a: 'Pelo WhatsApp, em qualquer botão desta página. Nossa equipe responde de segunda a sábado, no horário de atendimento, e confirma o horário da sua avaliação.',
    },
  ],
};

export const finalCta = {
  title: 'Comece por uma conversa.',
  text: 'Na avaliação você entende o que faz sentido para a sua pele, quanto tempo leva e quanto custa. Sem compromisso.',
  button: 'Agendar minha avaliação',
  photo: {
    image: 'ctaFinal',
    alt: 'Mulher sorridente de suéter claro sentada em uma poltrona, com a mão apoiando o rosto, numa sala iluminada.',
  } satisfies Photo,
};

export const contact = {
  title: 'Visite a Aurelle',
  addressLines: ['Rua das Magnólias, 412 · Cambuí', 'Campinas – SP · 13025-000'],
  hours: [
    { days: 'Segunda a sexta', time: '9h às 20h' },
    { days: 'Sábado', time: '9h às 14h' },
    { days: 'Domingo e feriados', time: 'Fechado' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
  disclaimer:
    'Site modelo para demonstração. Aurelle Aesthetic Studio é uma marca fictícia. Imagens geradas por IA.',
};
