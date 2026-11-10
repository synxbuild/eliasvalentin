"use client";

import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/content/landing";
import { cn } from "@/lib/utils";
import { useOpenRegistration } from "./registration-modal";

type Props = {
  children?: React.ReactNode;
  variant?: "pearl" | "line";
  className?: string;
};

/** Every CTA opens the same registration pop-up, with the same wording. */
export function CtaButton({ children = EVENT.cta, variant = "pearl", className }: Props) {
  const open = useOpenRegistration();
  return (
    <button
      type="button"
      onClick={open}
      aria-haspopup="dialog"
      className={cn(variant === "pearl" ? "btn-pearl" : "btn-line", "group", className)}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </button>
  );
}
