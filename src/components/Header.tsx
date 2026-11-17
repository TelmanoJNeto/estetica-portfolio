import { useEffect, useRef, useState } from 'react';
import { site, whatsappLink } from '../config/site';
import { nav } from '../data/content';
import { Icon } from './Icon';

export function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label={`${site.brandFull}, voltar ao início`}>
      <span className="logo__name">{site.brand}</span>
      <span className="logo__tag">{site.tagline}</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById('topo-sentinela');
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-aberto', open);
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`header${scrolled || open ? ' header--solid' : ''}`}>
      <div className="header__inner container">
        <Logo />

        <nav className="header__nav" aria-label="Seções da página">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--primary btn--sm header__cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          Agendar avaliação
        </a>

        <button
          ref={toggleRef}
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      <div id="menu-mobile" ref={panelRef} className="mobile-menu" data-open={open} hidden={!open}>
        <nav aria-label="Menu principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--primary btn--block" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <Icon name="chat" size={20} />
          Agendar avaliação
        </a>
        <p className="mobile-menu__meta">
          {site.city} · WhatsApp {site.whatsappDisplay}
        </p>
      </div>
    </header>
  );
}
