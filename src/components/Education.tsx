import { profile } from "../data/profile";
import { Icon } from "./icons";
import { PendingNote, Section, SectionHead } from "./Section";

const { education } = profile;

export default function Education() {
  const degree = education.degree;
  const hasDegree = Boolean(degree.institution);

  return (
    <Section id="education" className="education-section">
      <SectionHead
        eyebrow="WHERE THE FUNDAMENTALS CAME FROM"
        title={
          <>
            Degrees are a line item.
            <br />
            <em className="serif">Coursework</em> is the receipt.
          </>
        }
      />

      <div className="education-grid">
        <div className="edu-card reveal">
          {hasDegree ? (
            <>
              <div className="eyebrow section-eyebrow">{degree.period}</div>
              <h3>{degree.institution}</h3>
              <p>{degree.detail}</p>
            </>
          ) : (
            <>
              <div className="eyebrow section-eyebrow">PENDING — ONE LINE FROM YOUR RÉSUMÉ</div>
              <h3>
                Your degree, <em className="serif">here.</em>
              </h3>
              <p>
                Institution, programme, batch and CGPA go in <code>src/data/profile.ts</code> under{" "}
                <code>education.degree</code>. This card is styled and waiting so the section never looks empty.
              </p>
              <span className="edu-sticker">
                <Icon name="print" size={15} /> add me
              </span>
            </>
          )}
          <div className="edu-seal" aria-hidden="true">
            ✳
          </div>
        </div>

        <div className="edu-block reveal">
          <div className="eyebrow section-eyebrow">COURSEWORK I ACTUALLY USED</div>
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
          <div className="eyebrow section-eyebrow">BEYOND THE SYLLABUS</div>
          <ul className="coursework">
            {education.certs.map(c => (
              <li key={c.name}>
                <b>{c.name}</b>
                <span>{c.detail}</span>
              </li>
            ))}
          </ul>
          <PendingNote className="print-hide">
            Certificates, scholarships and hackathon placements belong in <code>education.certs</code>.
          </PendingNote>
        </div>
      </div>
    </Section>
  );
}
