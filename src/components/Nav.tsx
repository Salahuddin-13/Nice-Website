import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { profile } from "../data/profile";
import { Asterisk, Icon } from "./icons";
import { scrollToId, useScrollSpy } from "../hooks/useScroll";
import { sections } from "../data/nav";

export function ResumeButton({ className = "", dark = true }: { className?: string; dark?: boolean }) {
  const resume = profile.links.resume;
  const inner = (
    <>
      {resume ? "Download résumé" : "Résumé — print or save PDF"}
      <Icon name={resume ? "arrowDown" : "print"} size={18} />
    </>
  );
  if (resume)
    return (
      <a className={cn("button", dark ? "dark" : "light", className)} href={resume} download>
        {inner}
      </a>
    );
  return (
    <button className={cn("button", dark ? "dark" : "light", className)} onClick={() => window.print()}>
      {inner}
    </button>
  );
}

export default function Nav() {
  const active = useScrollSpy(sections.map(s => s.id));
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={cn("site-header no-print", lifted && "is-lifted")}>
      <a
        className="brand"
        href="#top"
        aria-label={`${profile.name} — back to top`}
        onClick={e => {
          e.preventDefault();
          go("top");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Asterisk />
        <span className="brand-name">
          {profile.firstName} <span className="brand-accent">{profile.lastName}</span>
        </span>
      </a>

      <nav className={cn("main-nav", open && "mobile-open")} aria-label="Sections">
        {sections.map(s => (
          <button key={s.id} className={cn("nav-link", active === s.id && "active")} onClick={() => go(s.id)}>
            {s.label}
          </button>
        ))}
        <button
          className="nav-link mobile-only"
          onClick={() => {
            setOpen(false);
            if (profile.links.resume) window.open(profile.links.resume, "_blank");
            else window.print();
          }}
        >
          Résumé
        </button>
      </nav>

      <div className="header-right no-print">
        <span className="little-reminder">
          <span className={cn("status-dot", profile.status.available && "is-open")} />
          {profile.status.label.toUpperCase()}
        </span>
        <ResumeButton className="header-resume" />
        <button className="mobile-menu icon-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
