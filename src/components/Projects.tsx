import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { profile, type Project } from "../data/profile";
import { Art } from "./Art";
import { Icon } from "./icons";
import { Section, SectionHead, Tag } from "./Section";

const { projects } = profile;

function StatusPill({ status }: { status: Project["status"] }) {
  return <span className={cn("status-pill", `status-${status.toLowerCase().replace(/\s+/g, "-")}`)}>{status}</span>;
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="modal case-study" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={e => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close case study" autoFocus>
          <Icon name="close" />
        </button>
        <div className="case-art">
          <Art art={project.art} />
        </div>
        <div className="eyebrow section-eyebrow">
          {project.year} · {project.role}
        </div>
        <h2 id="case-title">{project.name}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="eyebrow section-eyebrow">WHAT ACTUALLY HAPPENED</div>
        <ul className="bullets">
          {project.highlights.map(h => (
            <li key={h.slice(0, 18)}>{h}</li>
          ))}
        </ul>
        <div className="tag-row">
          {project.tags.filter(t => t.includes("Prize") || t.includes("Winner")).map(t => (
            <Tag key={t} tone="gold">
              {t}
            </Tag>
          ))}
          {project.stack.map(s => (
            <Tag key={s} tone="outline">
              {s}
            </Tag>
          ))}
        </div>
        <div className="modal-footer">
          {project.links.map(l => (
            <a className="button dark" key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} <Icon name="arrow" size={17} />
            </a>
          ))}
          <span className="modal-note">
            <Icon name="check" size={15} /> Full source code and documentation available on GitHub.
          </span>
        </div>
      </section>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const [featured, ...rest] = projects;

  const card = (p: Project, i: number) => (
    <article className={cn("discovery-card", "reveal", `card-${i % 3}`)} key={p.id}>
      <div
        className={`card-art ${p.art}`}
        role="button"
        tabIndex={0}
        onClick={() => setOpen(p)}
        onKeyDown={e => {
          if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen(p);
          }
        }}
        aria-label={`Open the ${p.name} case study`}
      >
        <Art art={p.art} />
        <span className="card-tag">{p.role}</span>
        <span className="card-time">{p.year}</span>
      </div>
      <div className="card-title-row">
        <button className="card-title" onClick={() => setOpen(p)}>
          <h3>{p.name}</h3>
          <Icon name="arrow" size={23} />
        </button>
        <StatusPill status={p.status} />
      </div>
      <p>{p.blurb}</p>
      <div className="tag-row">
        {p.tags.map(t => (
          <Tag key={t} tone={t.includes("Prize") || t.includes("Winner") ? "gold" : "default"}>
            {t}
          </Tag>
        ))}
      </div>
      <div className="card-links no-print">
        {p.links.map(l => (
          <a className="text-button" key={l.href} href={l.href} target="_blank" rel="noreferrer">
            {l.label} <Icon name="arrow" size={15} />
          </a>
        ))}
      </div>
    </article>
  );

  return (
    <Section id="work" className="projects-section">
      <SectionHead
        eyebrow="SELECTED WORK"
        title={
          <>
            Featured engineering projects
            <br />
            and <em className="serif">technical builds.</em>
          </>
        }
        aside="Click any project card to view the case study, architecture details, and source repositories."
        action={
          <a className="text-button explore-all" href={profile.links.github} target="_blank" rel="noreferrer">
            All 22 repos <Icon name="arrow" size={18} />
          </a>
        }
      />

      {/* The flagship gets its own wide card, then the grid carries the rest. */}
      <div className="discovery-card featured reveal" key={featured.id}>
        <div
          className={`card-art ${featured.art}`}
          role="button"
          tabIndex={0}
          onClick={() => setOpen(featured)}
          onKeyDown={e => {
            if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setOpen(featured);
            }
          }}
          aria-label={`Open the ${featured.name} case study`}
        >
          <Art art={featured.art} />
          <span className="card-tag">{featured.role}</span>
          <span className="card-time">{featured.year}</span>
        </div>
        <div className="featured-body">
          <div className="eyebrow section-eyebrow">
            <Icon name="spark" size={13} /> HEADLINE PROJECT
          </div>
          <div className="card-title-row">
            <button className="card-title" onClick={() => setOpen(featured)}>
              <h3>{featured.name}</h3>
              <Icon name="arrow" size={23} />
            </button>
            <StatusPill status={featured.status} />
          </div>
          <p>{featured.blurb}</p>
          <ul className="bullets featured-bullets">
            {featured.highlights.slice(0, 2).map(h => (
              <li key={h.slice(0, 18)}>{h}</li>
            ))}
          </ul>
          <div className="tag-row">
            {featured.tags.map(t => (
              <Tag key={t} tone="lime">
                {t}
              </Tag>
            ))}
          </div>
          <div className="card-links no-print">
            {featured.links.map(l => (
              <a className="text-button" key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label} <Icon name="arrow" size={15} />
              </a>
            ))}
            <button className="text-button" onClick={() => setOpen(featured)}>
              Read the case study <Icon name="arrow" size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="discovery-grid">{rest.map((p, i) => card(p, i + 1))}</div>

      {open && <CaseStudy project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
