import { Plus } from "lucide-react";
import { FAQ } from "@/content/landing";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="relative bg-bone text-[#16120e]">
      <div className="framed [border-color:var(--color-rule)]">
        <div className="shell grid gap-12 py-24 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            id="faq-title"
            tone="light"
            align="left"
            eyebrow="Antes de que preguntes"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            Preguntas <em className="metal-deep pr-1 font-normal italic">frecuentes</em>
          </SectionHeading>

          <div data-reveal className="border-t border-rule">
            {FAQ.map((f, i) => (
              <details key={f.q} className="group border-b border-rule" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-serif text-[1.3rem] font-light transition-colors hover:text-gold-deep sm:text-[1.45rem]">
                  {f.q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-rule">
                    <Plus aria-hidden className="faq-icon size-4 transition-transform duration-300" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-[#4f4941]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
