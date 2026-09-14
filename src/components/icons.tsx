/* Icons and the little brand asterisk, drawn inline so the site needs no icon package. */
import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "arrowDown"
  | "shuffle"
  | "spark"
  | "check"
  | "print"
  | "github"
  | "mail"
  | "pin"
  | "close"
  | "menu"
  | "external"
  | "layers"
  | "clock";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 19 19 5M5 5h14v14" />,
  arrowDown: <path d="M12 4v15m-6-6 6 6 6-6" />,
  shuffle: <path d="m17 3 4 4-4 4m0 2 4 4-4 4M3 7h3c5 0 7 10 12 10h3M3 17h3c2 0 3-2 5-5m3-4c1-1 3-1 4-1h3" />,
  spark: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  print: <path d="M7 8V3h10v5M7 18H4v-7h16v7h-3m-10 0v4h10v-4H7Z" />,
  github: (
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5A4 4 0 0 1 7.3 9c-.1-.3-.5-1.4.1-2.9 0 0 1.1-.4 3.6 1.3a9.6 9.6 0 0 1 5-1.3c2.5 1.7 3.6 1.3 3.6 1.3.6 1.5.2 2.6.1 2.9a4 4 0 0 1 1 2.8c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
  ),
  mail: <path d="M3 6h18v12H3V6Zm0 1 9 6 9-6" />,
  pin: <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  external: <path d="M14 4h6v6m0-6-9 9M18 14v6H4V6h6" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm9 8-9 5-9-5m18 4-9 5-9-5" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l4 2" />,
};

export function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x="44" y="3" width="12" height="94" rx="5" transform={`rotate(${i * 22.5} 50 50)`} />
      ))}
    </svg>
  );
}

/* Hand-drawn underline for the accent word in the headline. */
export function Squiggle() {
  return (
    <svg viewBox="0 0 300 24" aria-hidden="true">
      <path d="M4 16C77 0 176 1 292 9M27 22C119 8 211 9 263 14" />
    </svg>
  );
}
