import { profile } from "../data/profile";
import { Icon } from "./icons";
import { Section, SectionHead } from "./Section";

const { about } = profile;

export default function About() {
  return (
    <Section id="about" className="about-section">
      <SectionHead
        eyebrow="WHO IS WRITING"
        title={
          <>
            The gap between a model
            <br />
            and a <em className="serif">usable product.</em>
          </>
        }
      />

      <div className="about-grid">
        <div className="about-copy reveal">
          <p className="lead">{about.lead}</p>
          {about.paragraphs.map(p => (
            <p key={p.slice(0, 16)}>{p}</p>
          ))}
          <div className="about-facts">
            <span className="about-fact">
              <Icon name="pin" size={16} />
              {profile.location}
            </span>
            <span className="about-fact">
              <Icon name="mail" size={16} />
              {profile.email || "email: set it in src/data/profile.ts"}
            </span>
            <span className="about-fact">
              <Icon name="clock" size={16} />
              {profile.status.label}
            </span>
          </div>
        </div>

        <div className="about-side reveal">
          <div className="traits">
            {about.traits.map((t, i) => (
              <div className="trait" key={t.title}>
                <span className="trait-index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="currently">
            <div className="eyebrow section-eyebrow">CURRENTLY</div>
            <ul>
              {about.currently.map(c => (
                <li key={c.slice(0, 14)}>
                  <span className="bullet-spark">✧</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
