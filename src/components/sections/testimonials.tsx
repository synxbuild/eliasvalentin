import { TESTIMONIALS } from "@/content/landing";
import { CarouselControls } from "@/components/ui/carousel-controls";
import { TestimonialCard } from "@/components/ui/testimonial-card";

/** Bone band with a horizontal card rail and arrows top-right (reference: Clube dos 5% "Depoimentos"). */
export function Testimonials() {
  return (
    <section aria-labelledby="proof-title" className="relative bg-bone text-[#16120e]">
      <div className="framed [border-color:var(--color-rule)]">
        <div className="shell pb-10 pt-24 sm:pt-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div data-reveal className="max-w-2xl">
              <p className="tag-light">Personas que trabajaron con Elías</p>
              <h2 id="proof-title" className="display mt-7 text-[2.3rem] sm:text-[3rem] lg:text-[3.3rem]">
                Trading, negocio y vida personal: <em className="font-normal italic text-gold-deep">los cambios</em> que
                comparten.
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="[&_button]:border-[#16120e]/25 [&_button]:text-[#16120e] [&_button:hover]:border-gold-deep [&_button:hover]:bg-gold/10">
                <CarouselControls trackId="proof-track" />
              </div>
            </div>
          </div>
        </div>

        <ul
          id="proof-track"
          aria-label="Testimonios"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.name}
              data-reveal
              style={{ "--d": `${Math.min(i, 3) * 0.08}s` } as React.CSSProperties}
              className="w-[84%] shrink-0 snap-start sm:w-[21rem]"
            >
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>

        <p className="shell pb-24 pt-6 text-xs leading-relaxed text-[#6b645a]">
          Resultados compartidos por alumnos de La Fórmula del Éxito, el programa de Elías. No son resultados de esta
          masterclass gratuita. Son experiencias individuales, no típicas ni garantizadas; no representan lo que obtendrá
          cada participante.
        </p>
      </div>
    </section>
  );
}
