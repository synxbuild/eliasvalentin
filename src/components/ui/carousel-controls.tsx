"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Prev/next buttons for a native scroll-snap track (swipe still works without JS). */
export function CarouselControls({ trackId }: { trackId: string }) {
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const track = document.getElementById(trackId);
    if (!track) return;
    const update = () =>
      setEdge({
        start: track.scrollLeft < 8,
        end: track.scrollLeft + track.clientWidth > track.scrollWidth - 8,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [trackId]);

  const move = (dir: 1 | -1) => {
    const track = document.getElementById(trackId);
    const card = track?.querySelector("li");
    if (!track || !card) return;
    track.scrollBy({ left: dir * (card.clientWidth + 16), behavior: "smooth" });
  };

  const btn =
    "grid size-12 place-items-center rounded-full border border-line-strong text-paper transition hover:border-gold hover:bg-gold/10 disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <div className="flex gap-2">
      <button type="button" className={btn} onClick={() => move(-1)} disabled={edge.start} aria-label="Testimonio anterior">
        <ChevronLeft aria-hidden className="size-5" />
      </button>
      <button type="button" className={btn} onClick={() => move(1)} disabled={edge.end} aria-label="Testimonio siguiente">
        <ChevronRight aria-hidden className="size-5" />
      </button>
    </div>
  );
}
