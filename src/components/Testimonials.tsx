import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/content';
import { Icon } from './Icon';
import { Img } from './Img';

/** Grade de 3 cards no desktop; carrossel com scroll-snap e controles no mobile. */
export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const count = testimonials.items.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(cards.indexOf(e.target as HTMLElement));
        });
      },
      { root: track, threshold: 0.6 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section className="section section--sand testimonials" id="depoimentos" aria-labelledby="depoimentos-titulo">
      <div className="container">
        <div className="testimonials__head" data-reveal>
          <h2 id="depoimentos-titulo" className="display">
            {testimonials.title}
          </h2>
          <div className="carousel-controls" aria-label="Controles do carrossel" role="group">
            <button type="button" className="icon-btn" onClick={() => goTo(Math.max(0, active - 1))} disabled={active === 0} aria-label="Depoimento anterior">
              <Icon name="chevronLeft" size={22} />
            </button>
            <span className="carousel-controls__count" aria-live="polite">
              {active + 1} de {count}
            </span>
            <button type="button" className="icon-btn" onClick={() => goTo(Math.min(count - 1, active + 1))} disabled={active === count - 1} aria-label="Próximo depoimento">
              <Icon name="chevronRight" size={22} />
            </button>
          </div>
        </div>

        <ul className="testimonials__track" ref={trackRef} tabIndex={0} aria-label="Depoimentos de pacientes">
          {testimonials.items.map((t) => (
            <li key={t.name} className="quote-card" data-reveal>
              <figure>
                <div className="quote-card__media">
                  <Img {...t.photo} sizes="(min-width: 900px) 30vw, 80vw" />
                </div>
                <blockquote className="quote-card__text">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="quote-card__who">
                  <span className="quote-card__name">{t.name}</span>
                  <span className="quote-card__meta">
                    {t.age} anos · {t.treatment}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="fineprint fineprint--dark">{testimonials.note}</p>
      </div>
    </section>
  );
}
