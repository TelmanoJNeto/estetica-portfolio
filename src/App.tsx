import { useEffect } from 'react';
import { FinalCta, FloatingWhatsApp, Footer } from './components/Closing';
import { Faq } from './components/Faq';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About, Process, Structure, Team, Treatments, Trust } from './components/Sections';
import { Testimonials } from './components/Testimonials';

/**
 * Entradas sutis ao rolar. O conteúdo é visível por padrão: a classe
 * `reveal-pronto` só é aplicada quando há IntersectionObserver e o usuário
 * não pediu movimento reduzido.
 */
function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('is-in');
      else io.observe(el);
    });
    root.classList.add('reveal-pronto');
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div id="topo-sentinela" aria-hidden="true" />
      <Header />
      <main id="conteudo">
        <Hero />
        <Trust />
        <Treatments />
        <About />
        <Process />
        <Structure />
        <Team />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
