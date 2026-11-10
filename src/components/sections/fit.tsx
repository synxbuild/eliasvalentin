import { Check, X } from "lucide-react";
import { FOR_YOU, NOT_FOR_YOU } from "@/content/landing";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Fit() {
  return (
    <section aria-labelledby="fit-title" className="relative bg-night">
      <div className="framed border-t border-line">
        <div className="shell pb-16 pt-24 sm:pt-28">
          <SectionHeading id="fit-title" eyebrow="Antes de registrarte" className="max-w-3xl">
            Esta masterclass <em className="metal font-normal">es para ti</em> si…
          </SectionHeading>
        </div>

        <div className="grid border-y border-line lg:grid-cols-[1.35fr_1fr]">
          <div data-reveal className="border-line px-6 py-10 sm:px-10 lg:border-r lg:px-16 lg:py-14">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">
              <Check aria-hidden className="size-4" strokeWidth={2.5} /> Es para ti si
            </p>
            <ul className="mt-6 divide-y divide-line">
              {FOR_YOU.map((item) => (
                <li key={item} className="py-4 font-serif text-[1.2rem] font-light leading-snug text-paper sm:text-[1.3rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-reveal
            style={{ "--d": "0.1s" } as React.CSSProperties}
            className="bg-coal px-6 py-10 max-lg:border-t max-lg:border-line sm:px-10 lg:px-12 lg:py-14"
          >
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ash">
              <X aria-hidden className="size-4" /> No es para ti si
            </p>
            <ul className="mt-6 divide-y divide-line">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="py-4 leading-relaxed text-ash">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="shell py-20 text-center sm:py-24">
          <p className="display mx-auto max-w-3xl text-[1.9rem] sm:text-[2.4rem]">
            Si algo de la primera lista te habló directamente, presta atención.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-smoke">
            Porque probablemente no necesitas otra respuesta que puedas consumir y olvidar mañana.{" "}
            <strong className="font-semibold text-paper">Necesitas comenzar un proceso de transformación.</strong>
          </p>
          <CtaButton className="mt-10 w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
