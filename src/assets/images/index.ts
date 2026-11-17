// Arquivo gerado por scripts/optimize-images.mjs. Não edite à mão: rode `npm run images`.
import clinicaProdutos480 from './clinica-produtos-480.webp';
import clinicaProdutos960 from './clinica-produtos-960.webp';
import clinicaRecepcao720 from './clinica-recepcao-720.webp';
import clinicaRecepcao1440 from './clinica-recepcao-1440.webp';
import clinicaSalaTratamento720 from './clinica-sala-tratamento-720.webp';
import clinicaSalaTratamento1440 from './clinica-sala-tratamento-1440.webp';
import consultaAvaliacao720 from './consulta-avaliacao-720.webp';
import consultaAvaliacao1440 from './consulta-avaliacao-1440.webp';
import ctaFinal720 from './cta-final-720.webp';
import ctaFinal1440 from './cta-final-1440.webp';
import depoimento01480 from './depoimento-01-480.webp';
import depoimento01960 from './depoimento-01-960.webp';
import depoimento02480 from './depoimento-02-480.webp';
import depoimento02960 from './depoimento-02-960.webp';
import depoimento03480 from './depoimento-03-480.webp';
import depoimento03960 from './depoimento-03-960.webp';
import equipeBiomedico720 from './equipe-biomedico-720.webp';
import equipeBiomedico1024 from './equipe-biomedico-1024.webp';
import equipeMedicaChefe720 from './equipe-medica-chefe-720.webp';
import equipeMedicaChefe1024 from './equipe-medica-chefe-1024.webp';
import heroRetrato720 from './hero-retrato-720.webp';
import heroRetrato1024 from './hero-retrato-1024.webp';
import tratamentoCorporal720 from './tratamento-corporal-720.webp';
import tratamentoCorporal1024 from './tratamento-corporal-1024.webp';
import tratamentoFacial720 from './tratamento-facial-720.webp';
import tratamentoFacial1024 from './tratamento-facial-1024.webp';
import tratamentoPele720 from './tratamento-pele-720.webp';
import tratamentoPele1024 from './tratamento-pele-1024.webp';

export type ImageAsset = { src: string; srcSet: string; width: number; height: number };

export const images = {
  clinicaProdutos: { src: clinicaProdutos960, srcSet: `${clinicaProdutos480} 480w, ${clinicaProdutos960} 960w`, width: 1254, height: 1254 },
  clinicaRecepcao: { src: clinicaRecepcao1440, srcSet: `${clinicaRecepcao720} 720w, ${clinicaRecepcao1440} 1440w`, width: 1536, height: 1024 },
  clinicaSalaTratamento: { src: clinicaSalaTratamento1440, srcSet: `${clinicaSalaTratamento720} 720w, ${clinicaSalaTratamento1440} 1440w`, width: 1536, height: 1024 },
  consultaAvaliacao: { src: consultaAvaliacao1440, srcSet: `${consultaAvaliacao720} 720w, ${consultaAvaliacao1440} 1440w`, width: 1536, height: 1024 },
  ctaFinal: { src: ctaFinal1440, srcSet: `${ctaFinal720} 720w, ${ctaFinal1440} 1440w`, width: 1536, height: 1024 },
  depoimento01: { src: depoimento01960, srcSet: `${depoimento01480} 480w, ${depoimento01960} 960w`, width: 1254, height: 1254 },
  depoimento02: { src: depoimento02960, srcSet: `${depoimento02480} 480w, ${depoimento02960} 960w`, width: 1254, height: 1254 },
  depoimento03: { src: depoimento03960, srcSet: `${depoimento03480} 480w, ${depoimento03960} 960w`, width: 1254, height: 1254 },
  equipeBiomedico: { src: equipeBiomedico1024, srcSet: `${equipeBiomedico720} 720w, ${equipeBiomedico1024} 1024w`, width: 1024, height: 1536 },
  equipeMedicaChefe: { src: equipeMedicaChefe1024, srcSet: `${equipeMedicaChefe720} 720w, ${equipeMedicaChefe1024} 1024w`, width: 1024, height: 1536 },
  heroRetrato: { src: heroRetrato1024, srcSet: `${heroRetrato720} 720w, ${heroRetrato1024} 1024w`, width: 1024, height: 1536 },
  tratamentoCorporal: { src: tratamentoCorporal1024, srcSet: `${tratamentoCorporal720} 720w, ${tratamentoCorporal1024} 1024w`, width: 1024, height: 1536 },
  tratamentoFacial: { src: tratamentoFacial1024, srcSet: `${tratamentoFacial720} 720w, ${tratamentoFacial1024} 1024w`, width: 1024, height: 1536 },
  tratamentoPele: { src: tratamentoPele1024, srcSet: `${tratamentoPele720} 720w, ${tratamentoPele1024} 1024w`, width: 1024, height: 1536 },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
