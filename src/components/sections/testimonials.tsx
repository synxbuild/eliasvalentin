import { TESTIMONIALS } from "@/content/landing";
import { CarouselControls } from "@/components/ui/carousel-controls";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function Testimonials() {
  return (
    <section aria-labelledby="proof-title" className="section-y relative bg-coal">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-lux">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="proof-title" eyebrow="Personas que trabajaron con Elías" className="max-w-2xl">
            Trading, negocio y vida personal: <em className="text-gold-grad">estos son los cambios</em> que comparten.
          </SectionHeading>
          <div className="hidden lg:block">
            <CarouselControls trackId="proof-track" />
          </div>
        </div>
      </div>

      {/* Track bleeds to the right edge on desktop, aligned with the container on the left */}
      <ul
        id="proof-track"
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] sm:px-8 lg:px-[max(2rem,calc((100vw_-_76rem)/2_+_2rem))] lg:scroll-px-[max(2rem,calc((100vw_-_76rem)/2_+_2rem))] [&::-webkit-scrollbar]:hidden"
        aria-label="Testimonios"
      >
        {TESTIMONIALS.map((t, i) => (
          <li
            key={t.name}
            data-reveal
            style={{ "--d": `${Math.min(i, 3) * 0.08}s` } as React.CSSProperties}
            className="w-[86%] shrink-0 snap-start sm:w-[22rem] lg:w-[23.5rem]"
          >
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>

      <div className="container-lux">
        <div className="mt-4 flex items-center justify-between gap-6 lg:hidden">
          <span className="text-xs uppercase tracking-[0.2em] text-muted">Desliza →</span>
          <CarouselControls trackId="proof-track" />
        </div>

        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-muted">
          Resultados compartidos por alumnos de La Fórmula del Éxito, el programa de Elías. No son resultados de esta
          masterclass gratuita. Son experiencias individuales, no típicas ni garantizadas; no representan lo que obtendrá
          cada participante.
        </p>

        <div data-reveal className="mt-12 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
