import Image from "next/image";

const ITEMS = [
  "Masterclass gratuita",
  "En vivo por Zoom",
  "Domingo 15 de noviembre",
  "6:00 PM de Puerto Rico",
  "Elías Valentín",
];

/** Ticker band with a rotating brand seal in the middle (reference: Chaib, Ribeiro & Severo). */
export function SealBand() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section aria-label="Datos de la masterclass" className="relative z-10 border-y border-line bg-coal">
      <div className="flex overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center">
              {row.map((item, i) => (
                <li
                  key={`${item}-${i}`}
                  className="whitespace-nowrap px-7 font-serif text-[0.95rem] uppercase tracking-[0.36em] text-smoke"
                >
                  {item} <span className="pl-7 text-gold">—</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-graphite shadow-[0_0_0_10px_var(--color-coal),0_20px_50px_-10px_rgb(0_0_0/0.9)] sm:size-36"
      >
        <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow">
          <defs>
            <path id="seal-path" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
          </defs>
          {/* textLength makes the phrase fill the circle exactly once, so it never overlaps itself */}
          <text className="fill-ash font-serif text-[7.4px] uppercase">
            <textPath href="#seal-path" textLength="290" lengthAdjust="spacing">
              Elías Valentín · Masterclass gratuita ·
            </textPath>
          </text>
        </svg>
        <Image src="/brand/ev-monogram.png" alt="" width={489} height={382} className="h-11 w-auto" />
      </div>
    </section>
  );
}
