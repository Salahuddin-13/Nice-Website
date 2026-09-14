import { useEffect, useState } from "react";

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* Fade/rise anything with .reveal once it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (reduceMotion() || !("IntersectionObserver" in window)) {
      nodes.forEach(n => n.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    nodes.forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);
}

/* Which section is currently under the header — drives the nav's active dot. */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState("");
  const key = ids.join(",");
  useEffect(() => {
    const sections = key
      .split(",")
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      entries => {
        const lit = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (lit) setActive(lit.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [key]);
  return active;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
}
