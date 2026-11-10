import { LAYERS } from "@/content/landing";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/** Have / Do / Be drawn as a building: identity is the foundation everything else rests on. */
function LayerDiagram() {
  const tiers = [
    { verb: "Tener", caption: "tus resultados", width: "w-[62%]", tone: "border-line text-soft bg-panel" },
    { verb: "Hacer", caption: "tus estrategias y hábitos", width: "w-[80%]", tone: "border-line text-soft bg-panel-hi" },
    {
      verb: "Ser",
      caption: "la versión de ti que decide",
      width: "w-full",
      tone: "border-gold/60 text-ink bg-gradient-to-b from-gold-hi via-gold to-[#b88c45] shadow-[0_20px_60px_-15px_rgb(217_177_107/0.6)]",
    },
  ];

  return (
    <figure data-reveal className="relative mx-auto w-full max-w-md">
      <div aria-hidden className="glow inset-x-0 bottom-0 mx-auto h-40 w-3/4" />
      <div className="relative flex flex-col items-center gap-3">
        {tiers.map((t) => (
          <div
            key={t.verb}
            className={cn("flex items-baseline justify-between gap-3 rounded-2xl border px-5 py-5 sm:px-7", t.width, t.tone)}
          >
            <span className="font-serif text-2xl italic sm:text-3xl">{t.verb}</span>
            <span className="text-right text-xs font-semibold uppercase tracking-[0.14em] opacity-80">{t.caption}</span>
          </div>
        ))}
      </div>
      <figcaption className="mt-6 text-center text-sm text-muted">
        Lo que tienes se apoya en lo que haces. Y lo que haces, en quién eres.
      </figcaption>
    </figure>
  );
}

function ResultsLine() {
  return (
    <svg viewBox="0 0 320 90" className="h-auto w-full max-w-[20rem]" aria-hidden>
      <defs>
        <linearGradient id="rl" x1="0" x2="1">
          <stop offset="0" stopColor="#6b6152" />
          <stop offset="0.55" stopColor="#8f6a2c" />
          <stop offset="1" stopColor="#f3dca4" />
        </linearGradient>
      </defs>
      <path d="M0 70 H8" stroke="#3a342b" />
      <path
        d="M4 66 C 30 58, 44 74, 70 66 S 110 58, 134 66 S 172 74, 196 64 C 226 50, 250 30, 316 8"
        fill="none"
        stroke="url(#rl)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="316" cy="8" r="4" fill="#f3dca4" />
      <text x="0" y="88" className="fill-muted text-[8px] uppercase tracking-[0.3em]">
        Resultados
      </text>
    </svg>
  );
}

export function Mechanism() {
  return (
    <section aria-labelledby="mech-title" className="section-y relative bg-coal">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-lux">
        <SectionHeading id="mech-title" eyebrow="Por qué vuelve el mismo resultado" align="center" className="max-w-3xl">
          Tus resultados repiten <em className="text-gold-grad">la identidad</em> desde la que decides.
        </SectionHeading>

        <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <LayerDiagram />

          <ol className="space-y-4">
            {LAYERS.map((l, i) => {
              const key = i === LAYERS.length - 1;
              return (
                <li
                  key={l.step}
                  data-reveal
                  style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
                  className={cn(
                    "card-lux grid grid-cols-[3rem_1fr] gap-x-4 p-6 sm:grid-cols-[3.5rem_1fr] sm:gap-x-5 sm:p-7",
                    key && "border-gold/50 bg-gradient-to-br from-gold/12 to-transparent",
                  )}
                >
                  <span className={cn("font-serif text-4xl italic leading-none", key ? "text-gold-grad" : "text-muted/60")}>
                    {l.step}
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">{l.title}</p>
                    <h3 className="mt-2 font-serif text-2xl text-cream">{l.body}</h3>
                    <p className={cn("mt-2 text-[0.95rem]", key ? "font-medium text-cream" : "text-muted")}>{l.outcome}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div data-reveal className="mx-auto mt-20 flex max-w-3xl flex-col items-center gap-6 text-center">
          <ResultsLine />
          <p className="display text-3xl sm:text-4xl">
            Trabajar primero en ti, <em className="text-gold-grad">para que lo de afuera cambie después.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
