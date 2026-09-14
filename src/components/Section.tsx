import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Icon } from "./icons";

/* Every section opens the same way: tiny caps, a Manrope heading, an aside. */
export function SectionHead({
  eyebrow,
  title,
  aside,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow section-eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {aside && <p className="section-aside">{aside}</p>}
      </div>
      {action}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("section page-width", className)}>
      {children}
    </section>
  );
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "lime" | "outline" }) {
  return <span className={cn("tag", tone === "lime" && "tag-lime", tone === "outline" && "tag-outline")}>{children}</span>;
}

/* A note written in the site's own voice, used where a résumé detail is still missing. */
export function PendingNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("pending-note", className)}>
      <Icon name="spark" size={17} />
      {children}
    </p>
  );
}
