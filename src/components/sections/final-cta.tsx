import { CtaButton } from "@/components/ui/cta-button";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative isolate overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="beam left-1/2 -translate-x-1/2 opacity-90" />
        <div className="glow bottom-[-12rem] left-1/2 size-[46rem] -translate-x-1/2 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>

      <div className="container-lux max-w-4xl text-center">
        <p data-reveal className="font-serif text-[2.4rem] italic leading-tight text-gold-grad sm:text-6xl">
          Una mente diferente,
          <br />
          crea una vida diferente.
        </p>

        <p data-reveal className="eyebrow mt-16 justify-center">
          Última pregunta
        </p>
        <h2 id="final-title" data-reveal className="display mt-5 text-[2.5rem] sm:text-6xl">
          ¿Cuántas veces más vas a empezar de nuevo?
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-lg text-soft">
          El ciclo no se rompe solo. Se rompe el día que decides mirarlo.
        </p>
        <p data-reveal className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-cream">
          Domingo 15 de noviembre · Gratis · Nos vemos ahí
        </p>
        <div data-reveal className="mt-9">
          <CtaButton className="w-full sm:w-auto sm:px-10" />
        </div>
      </div>
    </section>
  );
}
