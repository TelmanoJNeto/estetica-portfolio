import { useEffect, useState } from 'react';
import { site, whatsappLink } from '../config/site';
import { contact, finalCta } from '../data/content';
import { Logo } from './Header';
import { Icon } from './Icon';
import { Img } from './Img';

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="cta-titulo">
      <div className="final-cta__media">
        <Img {...finalCta.photo} sizes="100vw" />
      </div>
      <div className="container final-cta__grid">
        <div className="final-cta__text" data-reveal>
          <h2 id="cta-titulo" className="display">
            {finalCta.title}
          </h2>
          <p className="final-cta__p">{finalCta.text}</p>
          <a className="btn btn--primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="chat" size={20} />
            {finalCta.button}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Mapa estilizado em SVG (sem iframe): ruas abstratas e o pino da clínica. */
function StylizedMap() {
  return (
    <figure className="map">
      <svg viewBox="0 0 480 300" role="img" aria-labelledby="mapa-titulo">
        <title id="mapa-titulo">Mapa ilustrativo do Cambuí com a localização da clínica</title>
        <rect width="480" height="300" rx="14" className="map__bg" />
        <path className="map__park" d="M300 34h120a12 12 0 0 1 12 12v64a12 12 0 0 1-12 12H300a12 12 0 0 1-12-12V46a12 12 0 0 1 12-12Z" />
        <g className="map__streets">
          <path d="M-10 92 490 60" />
          <path d="M-10 196 490 172" />
          <path d="M-10 268 490 250" />
          <path d="M92 -10 120 310" />
          <path d="M220 -10 236 310" />
          <path d="M354 -10 366 310" />
        </g>
        <g className="map__minor">
          <path d="M-10 144 490 116" />
          <path d="M160 -10 178 310" />
          <path d="M290 -10 300 310" />
          <path d="M30 -10 60 310" />
        </g>
        <path className="map__route" d="M60 280 C 110 230, 150 220, 190 200 S 228 160, 234 140" />
        <text x="318" y="84" className="map__label">Praça</text>
        <text x="250" y="232" className="map__label">Cambuí</text>
        <g className="map__pin" transform="translate(234 138)">
          <circle r="22" className="map__pulse" />
          <path d="M0 0c-8-9-13-15-13-22a13 13 0 0 1 26 0c0 7-5 13-13 22Z" />
          <circle cy="-22" r="4.5" className="map__dot" />
        </g>
      </svg>
      <figcaption className="visually-hidden">Mapa meramente ilustrativo.</figcaption>
    </figure>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="contato" aria-labelledby="contato-titulo">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <h2 id="contato-titulo" className="display display--md">
            {contact.title}
          </h2>
          <ul className="footer__social" aria-label="Redes sociais">
            {contact.social.map((s) => (
              <li key={s.label}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__info">
          <div className="footer__block">
            <h3 className="label label--light">
              <Icon name="pin" size={18} /> Endereço
            </h3>
            <address>
              {contact.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </address>
          </div>
          <div className="footer__block">
            <h3 className="label label--light">
              <Icon name="clock" size={18} /> Horários
            </h3>
            <dl className="hours">
              {contact.hours.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="footer__block">
            <h3 className="label label--light">
              <Icon name="phone" size={18} /> Contato
            </h3>
            <ul className="footer__contacts">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:+55${site.phoneDisplay.replace(/\D/g, '')}`}>Telefone {site.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <StylizedMap />
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {site.brandFull}
        </p>
        <p className="footer__disclaimer">{contact.disclaimer}</p>
      </div>
    </footer>
  );
}

/** Botão flutuante (mobile): aparece depois que os botões do hero saem da tela. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const actions = document.querySelector('.hero__actions');
    if (!hero || !actions || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    // Observa o hero inteiro (dispara também em saltos de âncora) e decide pela posição dos botões.
    const io = new IntersectionObserver(() => setVisible(actions.getBoundingClientRect().bottom < 0), {
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <a
      className={`fab${visible ? ' fab--visivel' : ''}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <Icon name="chat" size={28} />
    </a>
  );
}
