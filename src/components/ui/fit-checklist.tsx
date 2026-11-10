"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { FOR_YOU } from "@/content/landing";
import { cn } from "@/lib/utils";

/** Self-check: the visitor taps the lines that describe them and a counter fills up. */
export function FitChecklist() {
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  const n = picked.size;

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-5 sm:px-10 lg:px-12">
        <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-paper">
          <span className="grid size-5 place-items-center rounded-full bg-gold">
            <Check aria-hidden className="size-3 text-night" strokeWidth={3} />
          </span>
          Es para ti si
        </p>
        <p className="text-xs text-ash">Toca las que te describen</p>
      </div>

      <ul className="flex-1 px-3 py-3 sm:px-6 lg:px-8">
        {FOR_YOU.map((item, i) => {
          const on = picked.has(i);
          return (
            <li key={item}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i)}
                className={cn(
                  "group flex w-full items-start gap-4 rounded-xl px-3 py-3.5 text-left transition-colors duration-300 sm:px-4",
                  on ? "bg-gold/[0.07]" : "hover:bg-white/[0.03]",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    on ? "scale-110 border-gold bg-gold" : "border-line-strong group-hover:border-gold/60",
                  )}
                >
                  <Check
                    aria-hidden
                    strokeWidth={3}
                    className={cn(
                      "size-3.5 text-night transition-all duration-300",
                      on ? "scale-100 opacity-100" : "scale-50 opacity-0",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "font-serif text-[1.18rem] font-light leading-snug transition-colors duration-300 sm:text-[1.3rem]",
                    on ? "text-paper" : "text-smoke",
                  )}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-line px-6 py-5 sm:px-10 lg:px-12" aria-live="polite">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-sm text-smoke">
            Te describen <strong className="font-semibold tabular-nums text-paper">{n}</strong> de {FOR_YOU.length}
          </p>
          <p className={cn("text-sm transition-opacity duration-500", n > 0 ? "opacity-100" : "opacity-0")}>
            <span className="metal font-medium italic">Esta noche es para ti.</span>
          </p>
        </div>
        <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
          <div
            className="metal-bar h-full rounded-full transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${(n / FOR_YOU.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
