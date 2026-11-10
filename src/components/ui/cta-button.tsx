import { ArrowRight } from "lucide-react";
import { EVENT } from "@/content/landing";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  href?: string;
  variant?: "gold" | "ghost";
  className?: string;
};

/** Every CTA on the page points to the same registration form, with the same wording. */
export function CtaButton({ children = EVENT.cta, href = EVENT.registerHref, variant = "gold", className }: Props) {
  return (
    <a href={href} className={cn(variant === "gold" ? "btn-gold" : "btn-ghost", "group", className)}>
      <span>{children}</span>
      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
