/* The decorative art inside project cards. Pure CSS + inline SVG so there are no
 * image requests, and it stays crisp at any zoom. */
import type { CSSProperties } from "react";
import { Asterisk } from "./icons";

export type ArtKind = "orb" | "flower" | "peach" | "landscape";

export function Art({ art }: { art: ArtKind }) {
  if (art === "landscape")
    return (
      <div className="landscape-art">
        <div className="sky" />
        <div className="hill hill-back" />
        <div className="hill hill-front" />
        <div className="sun" />
        <span className="art-scribble">shipped.</span>
      </div>
    );

  if (art === "flower")
    return (
      <div className="flower-art">
        <div className="flower-shape">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} style={{ "--angle": `${i * 45}deg` } as CSSProperties} />
          ))}
          <i />
        </div>
        <span className="art-scribble">step by step.</span>
        <div className="mini-flower">✳</div>
      </div>
    );

  if (art === "peach")
    return (
      <div className="peach-art">
        <Asterisk />
        <span>read the diff.</span>
      </div>
    );

  return (
    <div className="orb-art">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orb" />
      <span className="orb-star">✧</span>
      <span className="orb-caption">12 ms, on a good day.</span>
    </div>
  );
}
