"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/content/landing";
import { cn } from "@/lib/utils";

/** Accordion with a height transition (grid rows 0fr → 1fr) and a fading answer. */
export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="border-t border-rule">
      {FAQ.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className="border-b border-rule">
            <h3>
              <button
                type="button"
                id={`${uid}-q${i}`}
                aria-expanded={on}
                aria-controls={`${uid}-a${i}`}
                onClick={() => setOpen(on ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-[1.3rem] font-light transition-colors hover:text-gold-deep sm:text-[1.45rem]"
              >
                {f.q}
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                    on ? "border-[#16120e] bg-[#16120e] text-gold-hi" : "border-rule group-hover:border-gold-deep",
                  )}
                >
                  <Plus
                    aria-hidden
                    className={cn("size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", on && "rotate-[135deg]")}
                  />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-a${i}`}
              role="region"
              aria-labelledby={`${uid}-q${i}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                on ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!on}>
                <p
                  className={cn(
                    "max-w-2xl pb-7 pr-12 leading-relaxed text-[#4f4941] transition-[opacity,transform] duration-500",
                    on ? "translate-y-0 opacity-100 delay-100" : "-translate-y-1 opacity-0",
                  )}
                >
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
