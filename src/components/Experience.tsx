import { profile } from "../data/profile";
import { Icon } from "./icons";
import { Section, SectionHead, Tag } from "./Section";

const { experience } = profile;

export default function Experience() {
  return (
    <Section id="experience" className="experience-section">
      <SectionHead
        eyebrow="EXPERIENCE & ACHIEVEMENTS"
        title={
          <>
            Research internships, hackathons,
            <br />
            and <em className="serif">award-winning</em> builds.
          </>
        }
        aside="Hands-on engineering experience across academic research, national hackathons, and high-impact systems."
      />

      <ol className="timeline">
        {experience.map(role => (
          <li className="timeline-item reveal" key={role.org}>
            <span className="timeline-dot" aria-hidden="true">
              <Icon name={role.title.includes("Prize") ? "trophy" : role.kind === "Research" ? "spark" : "layers"} size={15} />
            </span>
            <div className="timeline-body">
              <div className="role-head">
                <h3>
                  {role.title} <span className="role-at">at</span> {role.org}
                </h3>
                <span className="role-period">{role.period}</span>
              </div>
              <div className="role-meta">
                {role.location && <span className="role-location">{role.location}</span>}
                <span className="role-kind">
                  <Icon name={role.title.includes("Prize") ? "trophy" : role.kind === "Research" ? "check" : "shuffle"} size={13} />
                  {role.kind}
                </span>
              </div>
              <p className="role-summary">{role.summary}</p>
              <ul className="bullets">
                {role.bullets.map(b => (
                  <li key={b.slice(0, 20)}>{b}</li>
                ))}
              </ul>
              <div className="tag-row">
                {role.tags.map(t => (
                  <Tag key={t} tone={t === "Award" || t.includes("Prize") ? "gold" : "default"}>{t}</Tag>
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
      </ol>
    </Section>
  );
}
