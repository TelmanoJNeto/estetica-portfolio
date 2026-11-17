import { whatsappLink } from '../config/site';
import { about, process, structure, team, treatments, treatmentsIntro, trust } from '../data/content';
import { Icon } from './Icon';
import { Img } from './Img';

export function Trust() {
  return (
    <section className="trust" aria-label="Por que escolher a clínica">
      <ul className="container trust__list">
        {trust.map((item) => (
          <li key={item.title} className="trust__item" data-reveal>
            <Icon name={item.icon} size={30} className="trust__icon" />
            <div>
              <h2 className="trust__title">{item.title}</h2>
              <p className="trust__text">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Treatments() {
  return (
    <section className="section section--sand" id="tratamentos" aria-labelledby="tratamentos-titulo">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <h2 id="tratamentos-titulo" className="display">
            {treatmentsIntro.title}
          </h2>
          <p className="lead">{treatmentsIntro.text}</p>
        </div>

        <ul className="treatments">
          {treatments.map((t) => (
            <li key={t.id} className="treatment" data-reveal>
              <div className="treatment__media media-frame">
                <Img {...t.photo} sizes="(min-width: 900px) 30vw, 92vw" />
              </div>
              <div className="treatment__body">
                <p className="treatment__meta">
                  <span className="label">{t.label}</span>
                  <span>{t.duration}</span>
                </p>
                <h3 className="treatment__title">{t.title}</h3>
                <p className="treatment__text">{t.text}</p>
                <a className="link-arrow" href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  Saiba mais <span className="visually-hidden">sobre {t.title.toLowerCase()} pelo WhatsApp</span>
                  <Icon name="arrow" size={18} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section section--dark about" id="clinica" aria-labelledby="clinica-titulo">
      <div className="about__grid">
        <div className="about__media" data-reveal>
          <Img {...about.photo} sizes="(min-width: 1024px) 58vw, 100vw" />
        </div>
        <div className="about__text" data-reveal>
          <h2 id="clinica-titulo" className="display display--md">
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="about__p">
              {p}
            </p>
          ))}
          <dl className="stats">
            {about.stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt className="stats__label">{s.label}</dt>
                <dd className="stats__value">
                  {s.value}
                  {s.unit && <span className="stats__unit">{s.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>
          <p className="fineprint">{about.statsNote}</p>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process" id="como-funciona" aria-labelledby="processo-titulo">
      <div className="container process__grid">
        <div className="process__aside">
          <div data-reveal>
            <h2 id="processo-titulo" className="display">
              {process.title}
            </h2>
            <p className="lead">{process.text}</p>
          </div>
          <div className="process__media media-frame" data-reveal>
            <Img {...process.photo} sizes="(min-width: 1024px) 40vw, 92vw" />
          </div>
        </div>

        <ol className="steps">
          {process.steps.map((step, i) => (
            <li key={step.title} className="step" data-reveal>
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Structure() {
  return (
    <section className="section section--sage structure" aria-labelledby="estrutura-titulo">
      <div className="container structure__grid">
        <div className="structure__media" data-reveal>
          <div className="structure__room media-frame">
            <Img {...structure.roomPhoto} sizes="(min-width: 1024px) 52vw, 92vw" />
          </div>
          <div className="structure__products media-frame">
            <Img {...structure.productsPhoto} sizes="(min-width: 1024px) 20vw, 44vw" />
          </div>
        </div>
        <div className="structure__text" data-reveal>
          <h2 id="estrutura-titulo" className="display display--md">
            {structure.title}
          </h2>
          <p className="lead">{structure.text}</p>
          <ul className="checklist">
            {structure.items.map((item) => (
              <li key={item}>
                <Icon name="check" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="section team" id="equipe" aria-labelledby="equipe-titulo">
      <div className="container team__grid">
        <div className="team__intro" data-reveal>
          <h2 id="equipe-titulo" className="display">
            {team.title}
          </h2>
          <p className="lead">{team.text}</p>
        </div>
        <ul className="team__list">
          {team.members.map((m) => (
            <li key={m.name} className="member" data-reveal>
              <div className="member__media media-frame">
                <Img {...m.photo} sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 92vw" />
              </div>
              <h3 className="member__name">{m.name}</h3>
              <p className="member__role">{m.role}</p>
              <p className="member__registry">{m.registry}</p>
              <p className="member__bio">{m.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
