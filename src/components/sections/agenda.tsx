import { AGENDA, EVENT } from "@/content/landing";
import { CtaButton } from "@/components/ui/cta-button";

export function Agenda() {
  return (
    <section aria-labelledby="agenda-title" className="section-y relative">
      <div className="container-lux grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div data-reveal>
            <p className="eyebrow">
              {EVENT.dateLabel} · 6:00 PM
            </p>
            <h2 id="agenda-title" className="display mt-5 text-[2.35rem] sm:text-5xl lg:text-[3.6rem]">
              Lo que vamos a trabajar <em className="text-gold-grad">esa noche</em>
            </h2>
            <p className="mt-6 max-w-sm text-soft">
              Cinco momentos en una sola noche. Sales con tu primer patrón identificado y el primer paso claro.
            </p>
            <CtaButton className="mt-8 hidden lg:inline-flex" />
          </div>
        </div>

        <ol className="relative">
          {AGENDA.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}
              className="group grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line py-8 last:border-b sm:grid-cols-[5rem_1fr] sm:gap-x-6"
            >
              <span className="font-serif text-5xl italic leading-none text-transparent transition-colors duration-500 [-webkit-text-stroke:1px_var(--color-gold)] group-hover:text-gold sm:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-[1.45rem] leading-snug text-cream sm:text-[1.7rem]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <CtaButton className="w-full sm:w-auto lg:hidden" />
      </div>
    </section>
  );
}
