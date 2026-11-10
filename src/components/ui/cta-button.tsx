"use client";

import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/content/landing";
import { GlowButton } from "./glow-button";
import { useOpenRegistration } from "./registration-modal";

type Props = {
  children?: React.ReactNode;
  size?: "md" | "sm";
  className?: string;
};

/** Every CTA opens the same registration pop-up, with the same wording. */
export function CtaButton({ children = EVENT.cta, size = "md", className }: Props) {
  const open = useOpenRegistration();
  return (
    <GlowButton type="button" size={size} onClick={open} aria-haspopup="dialog" className={className}>
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </GlowButton>
  );
}
