import { Check, X } from "lucide-react";
import { FOR_YOU, NOT_FOR_YOU } from "@/content/landing";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Fit() {
  return (
    <section aria-labelledby="fit-title" className="section-y relative">
      <div className="container-lux">
        <SectionHeading id="fit-title" eyebrow="Antes de registrarte" align="center" className="max-w-3xl">
          Esta masterclass <em className="text-gold-grad">es para ti</em> si…
        </SectionHeading>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div data-reveal className="card-lux border-gold/40 p-7 sm:p-9">
            <h3 className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold">
              <span className="grid size-7 place-items-center rounded-full bg-gold text-ink">
                <Check aria-hidden className="size-4" strokeWidth={3} />
              </span>
              Es para ti si
            </h3>
            <ul className="mt-7 space-y-4">
              {FOR_YOU.map((item) => (
                <li key={item} className="flex gap-4 text-[1.02rem] leading-relaxed text-cream">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ "--d": "0.1s" } as React.CSSProperties} className="card-lux bg-transparent p-7 sm:p-9">
            <h3 className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted">
              <span className="grid size-7 place-items-center rounded-full border border-muted/40">
                <X aria-hidden className="size-4" />
              </span>
              No es para ti si
            </h3>
            <ul className="mt-7 space-y-4">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="flex gap-4 leading-relaxed text-muted">
                  <X aria-hidden className="mt-1 size-4 shrink-0 text-muted/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="display text-3xl sm:text-4xl">Si algo de la primera lista te habló directamente, presta atención.</p>
          <p className="mt-5 text-lg text-soft">
            Porque probablemente no necesitas otra respuesta que puedas consumir y olvidar mañana.{" "}
            <strong className="font-semibold text-gold-hi">Necesitas comenzar un proceso de transformación.</strong>
          </p>
          <CtaButton className="mt-9" />
        </div>
      </div>
    </section>
  );
}
