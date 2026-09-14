import { useState } from "react";
import { profile } from "../data/profile";
import { Icon } from "./icons";
import { Asterisk } from "./icons";
import { Section } from "./Section";

const { contact } = profile;

export default function Contact() {
  const [form, setForm] = useState({ from: "", org: "", message: "" });
  const ready = Boolean(profile.email);

  const subject = `Portfolio enquiry${form.org ? ` — ${form.org}` : ""}`;
  const body = `${form.message}\n\n— ${form.from}${form.org ? ` (${form.org})` : ""}\nSent from ${profile.name.split(" ")[0]}'s portfolio.`;
  const href = ready ? `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` : "#";

  return (
    <Section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-copy">
          <div className="eyebrow">
            <span className="tiny-spark">✳</span> {contact.eyebrow}
          </div>
          <h2>
            {contact.title.split(" ").slice(0, 2).join(" ")}{" "}
            <em className="serif">{contact.title.split(" ").slice(2).join(" ")}</em>
          </h2>
          <p>{contact.body}</p>

          <div className="contact-links">
            <a className="contact-link" href={profile.links.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={18} />
              <span>github.com/Salahuddin-13</span>
              <Icon name="arrow" size={15} />
            </a>
            {profile.links.linkedin ? (
              <a className="contact-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Icon name="external" size={18} />
                <span>LinkedIn</span>
                <Icon name="arrow" size={15} />
              </a>
            ) : (
              <span className="contact-link is-pending">
                <Icon name="external" size={18} />
                <span>LinkedIn — add the URL in src/data/profile.ts</span>
              </span>
            )}
            <span className="contact-link">
              <Icon name="pin" size={18} />
              <span>{profile.location}</span>
            </span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={e => {
            e.preventDefault();
            if (ready) window.location.href = href;
          }}
        >
          <div className="eyebrow section-eyebrow">OR WRITE IT HERE — IT OPENS YOUR MAIL APP</div>
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" required value={form.from} onChange={e => setForm({ ...form, from: e.target.value })} placeholder="Priya from the platform team" />
          <label htmlFor="c-org">Team or company</label>
          <input id="c-org" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="Optional" />
          <label htmlFor="c-msg">What's the problem?</label>
          <textarea id="c-msg" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="We have weather-station telemetry and no idea what to do with it…" />
          <button className="button dark full-width" type="submit" disabled={!ready}>
            {ready ? "Say hello" : "Add profile.email to enable sending"} <Icon name="arrow" size={18} />
          </button>
          <p className="privacy-note">
            {ready ? contact.note : `No backend, nothing stored: this composes a mailto. Set email in src/data/profile.ts.`}
          </p>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer page-width">
      <a
        className="brand footer-brand"
        href="#top"
        onClick={e => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Asterisk />
        {profile.firstName}
        <span className="brand-dot">dev</span>
      </a>
      <p>Built with React, TypeScript and Tailwind — content lives in one file, so updating it is a one-line change.</p>
      <span>
        © {new Date().getFullYear()} {profile.name}. <span className="footer-spark">✳</span> No template, no tracker.
      </span>
      <button className="back-top no-print" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        ↑
      </button>
    </footer>
  );
}
