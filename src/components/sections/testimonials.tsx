import { TESTIMONIALS } from "@/content/landing";
import { CarouselControls } from "@/components/ui/carousel-controls";
import { TestimonialCard } from "@/components/ui/testimonial-card";

/** Bone band with a horizontal card rail and arrows top-right (reference: Clube dos 5% "Depoimentos"). */
export function Testimonials() {
  return (
    <section aria-labelledby="proof-title" className="relative bg-bone text-[#16120e]">
      <div className="framed [border-color:var(--color-rule)]">
        <div className="shell pb-10 pt-24 sm:pt-28">
          <div data-reveal className="max-w-2xl">
            <p className="tag-light">Personas que trabajaron con Elías</p>
            <h2 id="proof-title" className="display mt-7 text-[2.3rem] sm:text-[3rem] lg:text-[3.3rem]">
              Trading, negocio y vida personal: <em className="metal-deep pr-1 font-normal italic">los cambios</em> que
              comparten.
            </h2>
          </div>
        </div>

        {/* Bottom padding leaves room for the card shadow to fade out instead of being clipped by the scroller */}
        <ul
          id="proof-track"
          aria-label="Testimonios"
          className="flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-14 pt-2 sm:scroll-px-10 lg:scroll-px-16 [scrollbar-width:none] sm:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden"
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
          {/* Trailing gutter: flex scrollers drop the end padding, so the last card would touch the edge */}
          <li aria-hidden className="w-1 shrink-0 sm:w-6 lg:w-12" />
        </ul>

        <div className="shell flex items-center justify-between gap-6 pb-24 [&_button]:border-[#16120e]/25 [&_button]:text-[#16120e] [&_button:hover]:border-gold-deep [&_button:hover]:bg-gold/10">
          <span aria-hidden className="h-px flex-1 bg-rule" />
          <CarouselControls trackId="proof-track" />
        </div>
      </div>
    </section>
  );
}
