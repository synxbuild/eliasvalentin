"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { EVENT } from "@/content/landing";
import { cn } from "@/lib/utils";

/** Bottom bar on mobile/tablet: appears after the hero and hides while the form is on screen. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const form = document.getElementById("registro");
    if (!hero || !form) return;
    let heroOut = false;
    let formIn = false;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroOut = !e.isIntersecting;
        if (e.target === form) formIn = e.isIntersecting;
      }
      setVisible(heroOut && !formIn);
    });
    io.observe(hero);
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/85 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-500 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <p className="text-xs leading-tight text-muted">
          <span className="block font-semibold uppercase tracking-[0.16em] text-gold">Gratis</span>
          {EVENT.dateLabel} · {EVENT.shortTime}
        </p>
        <a href={EVENT.registerHref} tabIndex={visible ? 0 : -1} className="btn-gold !min-h-11 shrink-0 !px-5 text-sm">
          Reservar mi lugar
          <ArrowRight aria-hidden className="size-4" />
        </a>
      </div>
    </div>
  );
}
