import { useState } from "react";
import { profile } from "../data/profile";
import { Asterisk, Icon, type IconName } from "./icons";
import { Section } from "./Section";

const { contact } = profile;

export default function Contact() {
  const [form, setForm] = useState({ from: "", org: "", message: "" });
  const ready = Boolean(profile.email);

  const subject = `Portfolio enquiry${form.org ? ` — ${form.org}` : ""}`;
  const body = `${form.message}\n\n— ${form.from}${form.org ? ` (${form.org})` : ""}\nSent from ${profile.firstName}'s portfolio.`;
  const href = ready ? `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` : "#";

  const link = (label: string, url: string, icon: IconName) =>
    url ? (
      <a className="contact-link" key={label} href={url} target={url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        <Icon name={icon} size={18} />
        <span>{label}</span>
        <Icon name="arrow" size={15} />
      </a>
    ) : (
      <span className="contact-link is-pending" key={label}>
        <Icon name={icon} size={18} />
        <span>{label} — paste your URL into src/data/profile.ts</span>
      </span>
    );

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
            {link(profile.email, ready ? `mailto:${profile.email}` : "", "mail")}
            {link("github.com/Salahuddin-13", profile.links.github, "github")}
            {link("LinkedIn", profile.links.linkedin, "linkedin")}
            {link("LeetCode", profile.links.leetcode, "code")}
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
          <textarea id="c-msg" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="We have a research assistantship on time-series anomaly detection and 8 weeks of runway…" />
          <button className="button dark full-width" type="submit" disabled={!ready}>
            {ready ? "Say hello" : "Add profile.email to enable sending"} <Icon name="arrow" size={18} />
          </button>
          <p className="privacy-note">
            {ready ? contact.note : "No backend, nothing stored: this composes a mailto. Set email in src/data/profile.ts."}
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
        <span className="brand-dot">{profile.lastName}</span>
      </a>
      <p>
        Built by hand with React, TypeScript and Tailwind — every word on this page comes from <code>src/data/profile.ts</code>,
        so updating it is a one-line change.
      </p>
      <span>
        © {new Date().getFullYear()} {profile.name}. <span className="footer-spark">✳</span> No template, no tracker.
      </span>
      <button className="back-top no-print" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        ↑
      </button>
    </footer>
  );
}
