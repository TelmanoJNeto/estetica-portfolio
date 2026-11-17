import type { CSSProperties } from 'react';
import { whatsappLink } from '../config/site';
import { hero } from '../data/content';
import { Icon } from './Icon';
import { Img } from './Img';

function Seal({ text }: { text: string }) {
  return (
    <div className="seal" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="seal__ring">
        <defs>
          <path id="seal-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text>
          <textPath href="#seal-circle" textLength="464" lengthAdjust="spacing">
            {/* espaço final como NBSP: o SVG colapsa espaços no fim do texto */}
            {`${text.trimEnd()}\u00A0`}
          </textPath>
        </text>
      </svg>
      <span className="seal__mark">A</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-titulo">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 id="hero-titulo" className="hero__title">
            {hero.titleLines.map((line, i) => (
              <span key={line} className="hero__line" style={{ '--i': i } as CSSProperties}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={20} />
              {hero.primaryCta}
            </a>
            <a className="btn btn--ghost" href="#tratamentos">
              {hero.secondaryCta}
              <Icon name="arrow" size={18} />
            </a>
          </div>
          <p className="hero__note">{hero.note}</p>
        </div>

        <div className="hero__media">
          <div className="hero__arch">
            <Img {...hero.photo} priority sizes="(min-width: 1024px) 44vw, 92vw" />
          </div>
          <Seal text={hero.seal} />
        </div>
      </div>
    </section>
  );
}
