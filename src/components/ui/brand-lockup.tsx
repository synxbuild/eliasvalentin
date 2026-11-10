import Image from "next/image";
import { cn } from "@/lib/utils";

/** Centered EV mark with the name in spaced metallic caps (the PNG lockup's name is too thin on screens). */
export function BrandLockup({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Image
        src="/brand/ev-monogram.png"
        alt="Elías Valentín"
        width={489}
        height={382}
        className={size === "lg" ? "h-14 w-auto sm:h-20" : "h-14 w-auto"}
      />
      <p
        aria-hidden
        className={cn(
          "font-serif uppercase",
          size === "lg"
            ? "mt-4 text-[0.72rem] tracking-[0.5em] sm:mt-5 sm:text-[0.85rem]"
            : "mt-4 text-[0.78rem] tracking-[0.5em]",
        )}
      >
        <span className="metal">Elías</span> <span className="metal-silver">Valentín</span>
      </p>
    </div>
  );
}
