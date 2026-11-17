import { useState } from 'react';
import { whatsappLink } from '../config/site';
import { faq } from '../data/content';
import { Icon } from './Icon';

/** Acordeão acessível: botões nativos com aria-expanded/aria-controls e região rotulada. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq" id="duvidas" aria-labelledby="duvidas-titulo">
      <div className="container faq__grid">
        <div className="faq__intro" data-reveal>
          <h2 id="duvidas-titulo" className="display">
            {faq.title}
          </h2>
          <p className="lead">{faq.text}</p>
          <a
            className="btn btn--ghost"
            href={whatsappLink('Olá! Tenho uma dúvida sobre os tratamentos da Aurelle.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" size={20} />
            Enviar uma pergunta
          </a>
        </div>

        <div className="accordion" data-reveal>
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const btnId = `faq-btn-${i}`;
            const panelId = `faq-painel-${i}`;
            return (
              <div key={item.q} className="accordion__item" data-open={isOpen}>
                <h3 className="accordion__heading">
                  <button
                    id={btnId}
                    type="button"
                    className="accordion__button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <Icon name="plus" size={22} className="accordion__icon" />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} className="accordion__panel">
                  <div className="accordion__inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
