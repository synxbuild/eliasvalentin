import { cn } from "@/lib/utils";

/** Typographic stand-in for the client's "EV" mark (the original logo file is not public). */
export function Monogram({ className, withName = true }: { className?: string; withName?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden
        className="grid size-10 place-items-center rounded-full border border-line-strong font-serif text-[1.05rem] italic text-gold-grad"
      >
        EV
      </span>
      {withName && (
        <span className="flex flex-col leading-none">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-muted">Masterclass</span>
          <span className="mt-1 font-serif text-[1.05rem] text-cream">Elías Valentín</span>
        </span>
      )}
    </span>
  );
}
