"use client";

import { useEffect, useRef } from "react";
import { AGENDA } from "@/content/landing";

/**
 * The night as a sequence: a rail that fills with gold as you scroll, and each
 * node lights up once the middle of the screen reaches it.
 */
export function AgendaTimeline() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const nodes = Array.from(list.querySelectorAll<HTMLElement>("[data-node]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const mid = window.innerHeight * 0.55;
      const box = list.getBoundingClientRect();
      // The rail runs from the centre of node 01 to the centre of node 05, no further.
      const center = (n: HTMLElement) => {
        const r = n.getBoundingClientRect();
        return r.top + r.height / 2 - box.top;
      };
      const top = center(nodes[0]);
      const height = center(nodes[nodes.length - 1]) - top;
      const p = Math.min(1, Math.max(0, (mid - box.top - top) / height));
      list.style.setProperty("--rail-top", `${top}px`);
      list.style.setProperty("--rail-h", `${height}px`);
      list.style.setProperty("--fill", p.toFixed(4));
      nodes.forEach((n) => {
        n.dataset.on = String(n.getBoundingClientRect().top < mid);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={ref} className="shell relative">
      {/* Rail + gold fill */}
      <span aria-hidden className="absolute left-[calc(1.25rem+1.25rem)] top-[var(--rail-top,2.5rem)] h-[var(--rail-h,0px)] w-px bg-line-strong sm:left-[calc(2.5rem+1.5rem)] lg:left-[calc(4rem+1.5rem)]">
        <span className="metal-bar absolute inset-x-0 top-0 block h-full origin-top [transform:scaleY(var(--fill,0))]" />
      </span>

      {AGENDA.map((item, i) => (
        <li key={item.title} className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 py-9 sm:grid-cols-[3rem_1fr_1fr] sm:gap-x-10 sm:py-11">
          <span
            data-node
            className="relative z-10 grid size-10 place-items-center rounded-full border border-line-strong bg-night font-serif text-[0.95rem] text-ash transition-[color,border-color,box-shadow,background-color] duration-500 data-[on=true]:border-gold data-[on=true]:bg-umber data-[on=true]:text-gold-hi data-[on=true]:shadow-[0_0_0_6px_rgb(200_162_96/0.12),0_0_24px_rgb(200_162_96/0.35)] sm:size-12 sm:text-base"
          >
            0{i + 1}
          </span>
          <h3 data-reveal className="display self-center text-[1.55rem] sm:text-[1.75rem]">
            {item.title}
          </h3>
          <p
            data-reveal
            style={{ "--d": "0.08s" } as React.CSSProperties}
            className="col-start-2 mt-3 leading-relaxed text-smoke sm:col-start-3 sm:row-start-1 sm:mt-0 sm:self-center"
          >
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
