import { X } from "lucide-react";
import { NOT_FOR_YOU } from "@/content/landing";
import { CtaButton } from "@/components/ui/cta-button";
import { FitChecklist } from "@/components/ui/fit-checklist";
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
          <div data-reveal className="border-line lg:border-r">
            <FitChecklist />
          </div>
          {/* Mirrors the checklist's structure (header row, icon per line), in the dark */}
          <div data-reveal style={{ "--d": "0.1s" } as React.CSSProperties} className="bg-coal max-lg:border-t max-lg:border-line">
            <div className="flex items-center border-b border-line px-6 py-5 sm:px-10 lg:px-12">
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-smoke">
                <span className="grid size-5 place-items-center rounded-full border border-line-strong">
                  <X aria-hidden className="size-3" strokeWidth={2.5} />
                </span>
                No es para ti si
              </p>
            </div>
            <ul className="px-3 py-3 sm:px-6 lg:px-8">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-4 px-3 py-3.5 sm:px-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-ash">
                    <X aria-hidden className="size-3" strokeWidth={2.5} />
                  </span>
                  <span className="font-serif text-[1.18rem] font-light leading-snug text-ash sm:text-[1.3rem]">
                    {item}
                  </span>
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
