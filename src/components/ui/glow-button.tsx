"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  size?: "md" | "sm";
  /** Classes for the outer frame (width, margins). */
  className?: string;
};

const GLOW_HALF = { md: 175, sm: 100 };

/**
 * Pearl pill with a soft light that follows the pointer inside the button and a
 * warm halo that switches to the side the pointer is on (adapted from the "brilho" button).
 */
export function GlowButton({ size = "md", className, children, onPointerMove, onPointerLeave, ...rest }: Props) {
  const frame = useRef<HTMLSpanElement>(null);

  const move = (e: React.PointerEvent<HTMLButtonElement>) => {
    onPointerMove?.(e);
    const f = frame.current;
    if (!f || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    f.style.setProperty("--glow-x", `${x - r.width / 2 - GLOW_HALF[size]}px`);
    const right = x > r.width / 2;
    f.style.setProperty("--halo-right", right ? "1" : "0");
    f.style.setProperty("--halo-left", right ? "0" : "1");
    f.dataset.hovering = "true";
  };

  const leave = (e: React.PointerEvent<HTMLButtonElement>) => {
    onPointerLeave?.(e);
    const f = frame.current;
    if (!f) return;
    f.style.removeProperty("--glow-x");
    f.style.removeProperty("--halo-right");
    f.style.removeProperty("--halo-left");
    delete f.dataset.hovering;
  };

  return (
    <span ref={frame} className={cn("glow-frame", size === "sm" && "glow-frame--sm", className)}>
      <span className="glow-clip">
        <button {...rest} className="glow-btn group" onPointerMove={move} onPointerLeave={leave}>
          {children}
        </button>
      </span>
    </span>
  );
}
