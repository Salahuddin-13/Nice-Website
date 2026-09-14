import { profile } from "../data/profile";
import { Icon } from "./icons";
import { Section, SectionHead } from "./Section";

const { skills } = profile;

export default function Skills() {
  return (
    <Section id="skills" className="skills-section">
      <SectionHead
        eyebrow="THE TOOLBOX, WITHOUT THE THEATRICS"
        title={
          <>
            What I've shipped with,
            <br />
            and what I'm still <em className="serif">getting good at.</em>
          </>
        }
        aside={skills.intro}
      />

      <div className="skill-groups">
        {skills.groups.map(group => (
          <div className={group.kind === "learning" ? "skill-group learning reveal" : "skill-group reveal"} key={group.title}>
            <div className="skill-group-head">
              <h3>{group.title}</h3>
              <span className="skill-count">
                {group.kind === "learning" ? <Icon name="spark" size={14} /> : <Icon name="check" size={14} />}
                {group.kind === "learning" ? "learning" : "shipped"}
              </span>
            </div>
            <div className="chip-row">
              {group.items.map(item => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
