import Image from "next/image";
import { cn } from "@/lib/utils";

/** Official EV mark (gold E, silver V) extracted from eliasvalentin.com, with the brand name in spaced caps. */
export function Monogram({ className, withName = true }: { className?: string; withName?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3.5", className)}>
      <Image
        src="/brand/ev-monogram.png"
        alt={withName ? "" : "Elías Valentín"}
        width={489}
        height={382}
        className="h-8 w-auto sm:h-9"
      />
      {withName && (
        <span className="hidden font-serif text-[0.8rem] uppercase tracking-[0.42em] sm:inline">
          <span className="metal">Elías</span> <span className="metal-silver">Valentín</span>
        </span>
      )}
    </span>
  );
}
