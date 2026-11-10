import { MARQUEE } from "@/content/landing";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {MARQUEE.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-7 font-serif text-lg italic text-cream/90 sm:text-xl">{item}</span>
          <span className="text-gold" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Ribbon of verified facts right after the hero: quick authority without crowding the first screen. */
export function Marquee() {
  return (
    <section aria-label="Datos de la masterclass" className="relative border-y border-line bg-coal/80 py-4">
      <div className="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
