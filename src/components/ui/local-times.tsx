"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import * as Flags from "country-flag-icons/react/3x2";
import { EVENT, EVENT_COUNTRIES } from "@/content/landing";
import { cn } from "@/lib/utils";

type FlagCode = (typeof EVENT_COUNTRIES)[number]["code"];

const timeIn = (tz?: string) =>
  new Intl.DateTimeFormat("es", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: tz }).format(
    new Date(EVENT.startsAt),
  );

function Flag({ code, round, className }: { code: FlagCode; round?: boolean; className?: string }) {
  const Svg = Flags[code];
  return (
    <span className={cn("flag", className)}>
      <Svg title="" preserveAspectRatio={round ? "xMidYMid slice" : undefined} />
    </span>
  );
}

const PREVIEW: FlagCode[] = ["PR", "US", "MX", "CO", "ES"];

/** "Hora en tu país": stacked flags that open a panel with the start time in every country. */
export function LocalTimes({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [local, setLocal] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    // The visitor's own time zone is only known in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocal(timeIn(undefined));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("max-sm:static sm:relative", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="group flex h-full items-center gap-2.5 border border-line-strong px-3 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.08em] sm:gap-3 sm:px-4 sm:text-[0.72rem] sm:tracking-[0.1em] text-smoke transition-colors hover:border-gold/60 hover:text-paper"
      >
        <span className="flex" aria-hidden>
          {PREVIEW.map((c, i) => (
            <Flag
              key={c}
              code={c}
              round
              className={cn(
                "size-[1.2rem] rounded-full ring-2 ring-night transition-[margin] duration-300",
                i > 0 && "-ml-1.5 group-hover:-ml-0.5",
                i > 2 && "max-sm:hidden",
              )}
            />
          ))}
        </span>
        <span className="sm:hidden">Tu país</span>
        <span className="hidden sm:inline">Hora en tu país</span>
        <ChevronDown aria-hidden className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")} />
      </button>

      <div
        id={panelId}
        role="region"
        aria-label="Hora de inicio en cada país"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 max-h-[min(26rem,60vh)] origin-top overflow-y-auto overscroll-contain rounded-[1rem] border border-line-strong bg-coal p-4 shadow-[0_40px_80px_-20px_rgb(0_0_0/0.95)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:right-auto sm:max-h-none sm:w-[36rem] sm:p-5",
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1.5 scale-[0.98] opacity-0",
        )}
      >
        {local && (
          <p className="mb-3 flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-2.5 text-sm text-paper">
            <Globe aria-hidden className="size-4 text-gold" />
            En tu zona horaria: <strong className="font-semibold">{local}</strong>
          </p>
        )}
        <ul className="grid gap-x-6 sm:grid-cols-2">
          {EVENT_COUNTRIES.map((c) => (
            <li key={c.code} className="flex items-center gap-3 border-b border-line py-2 text-sm">
              <Flag code={c.code} />
              <span className="flex-1 text-smoke">{c.name}</span>
              <span className="tabular-nums text-paper" suppressHydrationWarning>
                {timeIn(c.tz)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ash">Todos los horarios son del domingo 15 de noviembre.</p>
      </div>
    </div>
  );
}
