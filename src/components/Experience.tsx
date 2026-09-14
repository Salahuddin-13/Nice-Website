import { profile } from "../data/profile";
import { Icon } from "./icons";
import { PendingNote, Section, SectionHead, Tag } from "./Section";

const { experience, experienceNote } = profile;

export default function Experience() {
  return (
    <Section id="experience" className="experience-section">
      <SectionHead
        eyebrow="THINGS I WAS RESPONSIBLE FOR"
        title={
          <>
            A short timeline,
            <br />
            written in <em className="serif">verifiable</em> sentences.
          </>
        }
        aside="Every bullet here came from a repo you can open. Where a number is quoted, it lives in the README."
      />

      <ol className="timeline">
        {experience.map(role => (
          <li className="timeline-item reveal" key={role.org}>
            <span className="timeline-dot" aria-hidden="true">
              <Icon name="layers" size={15} />
            </span>
            <div className="timeline-body">
              <div className="role-head">
                <h3>
                  {role.title} <span className="role-at">at</span> {role.org}
                </h3>
                <span className="role-period">{role.period}</span>
              </div>
              {role.location && <span className="role-location">{role.location}</span>}
              <p className="role-summary">{role.summary}</p>
              <ul className="bullets">
                {role.bullets.map(b => (
                  <li key={b.slice(0, 20)}>{b}</li>
                ))}
              </ul>
              <div className="tag-row">
                {role.tags.map(t => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {role.link && (
                <a className="text-button role-link" href={role.link.href} target="_blank" rel="noreferrer">
                  {role.link.label} <Icon name="arrow" size={16} />
                </a>
              )}
            </div>
          </li>
        ))}

        {experienceNote.pending && (
          <li className="timeline-item pending reveal">
            <span className="timeline-dot dashed" aria-hidden="true">
              <Icon name="spark" size={15} />
            </span>
            <div className="timeline-body">
              <div className="role-head">
                <h3>
                  Internships & full-time roles <span className="role-at">slot in</span> here
                </h3>
                <span className="role-period">Résumé → this timeline</span>
              </div>
              <p className="role-summary">{experienceNote.text}</p>
            </div>
          </li>
        )}
      </ol>

      <PendingNote className="print-hide">
        The content above reads from <code>src/data/profile.ts</code>. Paste your résumé in and these entries become
        real job titles, companies and dates — no layout changes needed.
      </PendingNote>
    </Section>
  );
}
