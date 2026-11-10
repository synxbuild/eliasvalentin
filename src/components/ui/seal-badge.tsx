import { cn } from "@/lib/utils";

/** Rotating circular seal: "En vivo · Gratis · Por Zoom" around the date. */
export function SealBadge({ className }: { className?: string }) {
  const text = "EN VIVO · GRATIS · POR ZOOM · EN VIVO · GRATIS · POR ZOOM · ";
  return (
    <div className={cn("relative size-28 sm:size-32", className)} aria-hidden>
      <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id="seal-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-gold text-[8.6px] font-semibold tracking-[0.22em]">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] grid place-items-center rounded-full border border-line-strong bg-ink/80 backdrop-blur">
        <div className="text-center leading-none">
          <span className="block font-serif text-3xl italic text-gold-grad">15</span>
          <span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-soft">Nov</span>
        </div>
      </div>
    </div>
  );
}
