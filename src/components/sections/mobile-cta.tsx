"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/content/landing";
import { useOpenRegistration } from "@/components/ui/registration-modal";
import { cn } from "@/lib/utils";

/** Bottom bar on mobile/tablet: appears once the hero is out of view. */
export function MobileCta() {
  const open = useOpenRegistration();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting), { threshold: 0.05 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-night/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-500 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <p className="text-xs leading-tight text-ash">
          <span className="block font-semibold uppercase tracking-[0.16em] text-sand">Gratis</span>
          {EVENT.dateLabel} · {EVENT.shortTime}
        </p>
        <button
          type="button"
          onClick={open}
          tabIndex={visible ? 0 : -1}
          className="btn-pearl !min-h-11 shrink-0 !px-5 !text-[0.68rem] before:!size-12"
        >
          Reservar
          <ArrowUpRight aria-hidden className="size-4" />
        </button>
      </div>
    </div>
  );
}
