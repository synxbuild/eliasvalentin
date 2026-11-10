import { Plus } from "lucide-react";
import { FAQ } from "@/content/landing";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="section-y relative bg-coal">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-lux grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading id="faq-title" eyebrow="Antes de que preguntes" className="lg:sticky lg:top-32 lg:self-start">
          Preguntas <em className="text-gold-grad">frecuentes</em>
        </SectionHeading>

        <div data-reveal className="divide-y divide-line border-y border-line">
          {FAQ.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-serif text-xl text-cream transition-colors hover:text-gold-hi sm:text-[1.4rem]">
                {f.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong">
                  <Plus aria-hidden className="faq-icon size-4 text-gold transition-transform duration-300" />
                </span>
              </summary>
              <p className="-mt-1 max-w-2xl pb-7 pr-12 leading-relaxed text-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
