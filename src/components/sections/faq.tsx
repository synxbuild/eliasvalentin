import { FaqList } from "@/components/ui/faq-list";
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

          <div data-reveal>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  );
}
