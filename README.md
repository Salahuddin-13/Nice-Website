# Mohammed Salahuddin — portfolio

A single-page portfolio built on the **Offscript** design language: cream paper, lilac ink,
Manrope display type, hand-drawn squiggles, arched hero art, a marquee ticker and modal case
studies. Same look, new purpose.

React 19 · TypeScript · Vite · Tailwind v4 · one build file (`vite-plugin-singlefile`).

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173  (also reachable from your phone on the same Wi-Fi)
npm run build    # -> dist/index.html, everything inlined
```

## Edit it

**Everything on the page comes from one file: [`src/data/profile.ts`](src/data/profile.ts).**
No component needs to be touched.

| You want to change              | Field                                              |
| ------------------------------- | -------------------------------------------------- |
| Name, role, headline, status    | `name`, `role`, `headline`, `status`               |
| Email / GitHub / LinkedIn       | `email`, `links.*`                                 |
| The hero copy, sticker, caption | `hero.*`                                           |
| Stats under the hero            | `stats`                                            |
| Your story                      | `about.*`                                          |
| Jobs & internships              | `experience[]` (add objects — the timeline grows)  |
| Projects & case studies         | `projects[]`                                       |
| Skills                          | `skills.groups[]` (`kind: "shipped" / "learning"`) |
| Degree, coursework, certs       | `education.*`                                      |

Anything you leave blank renders as a paper note in the site's own voice instead of a broken
layout, so the page never looks half-finished.

### Adding a real résumé PDF

Drop `resume.pdf` into `public/` and set `links.resume: "/resume.pdf"`. The button becomes a
download. Leave it empty and the button prints this page instead — there is a print stylesheet
in `src/index.css` that turns the site into a clean, black-on-white, two-column résumé
(Cmd/Ctrl-P → Save as PDF). One source of truth, no second document to maintain.

## Deploy

Netlify is configured in [`netlify.toml`](netlify.toml) (`npm run build`, publish `dist`).

```bash
npx netlify-cli deploy --prod     # or just push — the site is linked
```

## Layout

```
src/
  data/profile.ts        ← all content
  components/
    Nav.tsx              header, scroll-spy, résumé button (+ Footer lives in Contact.tsx)
    Hero.tsx             headline, art, stats, ticker
    About.tsx            story + traits + "currently"
    Experience.tsx       timeline
    Projects.tsx         card grid + modal case study
    Skills.tsx           shipped vs. learning
    Education.tsx        degree, coursework, beyond the syllabus
    Contact.tsx          mailto composer + footer
    Section.tsx          shared section head / tags / pending note
    Art.tsx              CSS card art
    icons.tsx            inline SVG icons, brand asterisk, squiggle
  hooks/useScroll.ts     reveal-on-scroll, scroll-spy, smooth scroll
  index.css              the whole design system, incl. print styles
```

Accessibility & polish already handled: keyboard-operable cards, `Escape`-closable modal with
focus restore, `prefers-reduced-motion`, four responsive breakpoints, skip link, OG/Twitter meta
and an inline SVG favicon.
