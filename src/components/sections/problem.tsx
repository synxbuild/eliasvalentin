import { NOT_NEEDED } from "@/content/landing";
import { SectionHeading } from "@/components/ui/section-heading";

/** Shared-border grid (reference: Clube dos 5% "Método dos 8 passos" table). */
export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="relative bg-night">
      <div className="framed">
        <div className="shell pb-12 pt-20 sm:pb-20 sm:pt-28">
          <SectionHeading id="problem-title" eyebrow="Lo que casi nadie te dice" className="max-w-3xl">
            Has intentado cambiar casi todo. <em className="metal font-normal">Menos una cosa.</em>
          </SectionHeading>
        </div>

        <ul className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {NOT_NEEDED.map((item, i) => (
            <li
              key={item.struck}
              data-reveal
              style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
              className="problem-item group relative overflow-hidden border-line px-7 py-7 transition-colors duration-500 hover:bg-white/[0.02] max-lg:border-b sm:odd:border-r sm:py-10 lg:border-r lg:last:border-r-0 lg:py-14"
            >
              {/* Big translucent number behind the text; it slides in once the card is revealed */}
              <span
                aria-hidden
                className="problem-num pointer-events-none absolute -left-1 top-1/2 -translate-y-1/2 font-serif text-[7.5rem] font-light leading-none tracking-[-0.06em] text-white/[0.07] transition-colors duration-500 group-hover:text-gold/20 sm:left-4 sm:top-5 sm:translate-y-0 sm:text-[8.5rem]"
              >
                0{i + 1}
              </span>
              <div className="relative pl-14 sm:pl-0 sm:pt-24">
                <p className="text-sm text-ash">{item.lead}</p>
                <p className="display mt-1.5 text-[1.9rem] text-smoke transition-colors duration-500 group-hover:text-paper">
                  <span className="strike">{item.struck}</span>.
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="shell grid gap-8 py-14 sm:gap-10 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20 lg:py-24">
          <h3 data-reveal className="display text-[2.3rem] sm:text-[3rem] lg:text-[3.5rem]">
            Quizás necesitas transformar <em className="metal font-normal">a la persona</em> que está detrás de todo eso.
          </h3>
          <div data-reveal style={{ "--d": "0.1s" } as React.CSSProperties}>
            <p className="text-[1.04rem] leading-relaxed text-smoke">
              Puedes cambiar de negocio, de estrategia, de mentor o de oportunidad, pero si sigues operando desde{" "}
              <strong className="font-semibold text-paper">
                las mismas creencias, los mismos miedos y los mismos hábitos
              </strong>
              , vas a volver a producir resultados parecidos.
            </p>
          </div>
        </div>

        {/* Section separator: rule with a short bright bar (reference: Clube dos 5%) */}
        <div aria-hidden className="shell flex items-center gap-6 pb-2">
          <span className="h-px flex-1 bg-line-strong" />
          <span className="h-[2px] w-16 bg-paper" />
          <span className="h-px flex-1 bg-line-strong" />
        </div>
      </div>
    </section>
  );
}
