import { profile } from "../data/profile";
import { Asterisk, Icon, Squiggle } from "./icons";
import { scrollToId } from "../hooks/useScroll";
import { ResumeButton } from "./Nav";

const { hero, stats } = profile;

export default function Hero() {
  return (
    <section className="hero page-width" id="top">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="tiny-spark">✳</span> {hero.eyebrow}
        </div>

        <h1>
          {profile.name.split(" ")[0]}
          <br />
          <span className="magic">
            {profile.name.split(" ").slice(1).join(" ")}.
            <Squiggle />
          </span>
          <span className="title-spark">✧</span>
        </h1>

        <p className="hero-description">
          {profile.role}. {hero.description}
        </p>

        <div className="hero-actions">
          <button className="button dark" onClick={() => scrollToId("work")}>
            See what I’ve built <Icon name="arrow" size={19} />
          </button>
          <button className="surprise-button" onClick={() => scrollToId("contact")}>
            <Icon name="shuffle" size={19} /> Or skip to contact
          </button>
        </div>

        <div className="hero-actions secondary no-print">
          <ResumeButton dark={false} />
          <a className="surprise-button" href={profile.links.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={19} /> @Salahuddin-13
          </a>
        </div>

        <div className="hero-social">
          <img className="hero-avatar" src="https://avatars.githubusercontent.com/u/185537916?v=4" alt="" width={40} height={40} />
          <span>
            {hero.social} <strong>All code reviewable.</strong>
          </span>
          <svg className="social-swoop" viewBox="0 0 65 35">
            <path d="M4 24C14 34 40 27 49 5m-11 5 12-7 7 12" />
          </svg>
        </div>
      </div>

      <div className="hero-visual">
        <div className="image-halo" />
        <div className="hero-image-wrap">
          <img className="hero-image" src={hero.image} alt={hero.imageAlt} />
        </div>
        <div className="curiosity-sticker">
          <span>{hero.sticker[0]}</span>
          <Asterisk />
          <span>{hero.sticker[1]}</span>
        </div>
        <svg className="hero-squiggle" viewBox="0 0 100 95" aria-hidden="true">
          <path d="M6 45c18-36 21 55 40 19s-2-58 7-36 22 47 24 17 3-26 17-20" />
        </svg>
        <div className="floating-label">
          <span className="label-spark">✳</span>
          {hero.floatLabel}
        </div>
        <button className="permission-card" onClick={() => scrollToId("experience")}>
          <span>WHERE I'VE BEEN</span>
          <strong>
            Hackathon
            <br />
            to production.
          </strong>
          <Icon name="arrow" size={20} />
        </button>
        <span className="visual-caption">{hero.caption}</span>
      </div>

      <div className="stats-row">
        {stats.map(s => (
          <div className="stat" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Ticker() {
  const items = [...profile.ticker, ...profile.ticker];
  return (
    <div className="ticker" aria-hidden="true">
      <div>
        {items.map((t, i) => (
          <span key={i}>
            {t}
            <Asterisk />
          </span>
        ))}
      </div>
    </div>
  );
}
