import { profile } from "../data/profile";
import { Icon } from "./icons";
import { Section, SectionHead } from "./Section";

const { education } = profile;

export default function Education() {
  const degree = education.degree;
  const hasDegree = Boolean(degree.institution);

  return (
    <Section id="education" className="education-section">
      <SectionHead
        eyebrow="EDUCATION & CREDENTIALS"
        title={
          <>
            Academic foundation
            <br />
            and professional <em className="serif">certifications.</em>
          </>
        }
        aside="Core coursework in computer science, enterprise cloud certifications, and competitive programming."
      />

      <div className="education-grid">
        <div className="edu-card reveal">
          <div className="eyebrow section-eyebrow">{degree.period}</div>
          {hasDegree ? (
            <>
              <h3>{degree.institution}</h3>
              <p>{degree.detail}</p>
              <span className="edu-sticker">
                <Icon name="check" size={15} /> in good standing
              </span>
            </>
          ) : (
            <>
              <h3>
                Your degree, <em className="serif">here.</em>
              </h3>
              <p>Set education.degree in src/data/profile.ts and this card fills itself in.</p>
            </>
          )}
          <div className="edu-seal" aria-hidden="true">
            ✳
          </div>
        </div>

        <div className="edu-block reveal">
          <div className="eyebrow section-eyebrow">RELEVANT COURSEWORK</div>
          <ul className="coursework">
            {education.coursework.map(c => (
              <li key={c.course}>
                <b>{c.course}</b>
                <span>{c.evidence}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="edu-block reveal">
          <div className="eyebrow section-eyebrow">CERTIFICATIONS &amp; AWARDS</div>
          <ul className="coursework">
            {education.certs.map(c => (
              <li key={c.name}>
                <b>{c.name}</b>
                <span>{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="leadership reveal">
        <div className="eyebrow section-eyebrow">LEADERSHIP &amp; CO-CURRICULAR</div>
        <div className="leadership-row">
          {education.leadership.map(l => (
            <div className="leadership-item" key={l.name}>
              <h3>{l.name}</h3>
              <p>{l.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
