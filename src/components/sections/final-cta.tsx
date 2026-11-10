import { BrandLockup } from "@/components/ui/brand-lockup";
import { CtaButton } from "@/components/ui/cta-button";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-night">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[60rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(200_150_80/0.22),transparent)]"
      />
      <div className="framed">
        <div className="shell relative py-28 text-center sm:py-36">
          <div data-reveal>
            <BrandLockup size="lg" />
          </div>
          <p data-reveal className="display mx-auto mt-12 max-w-3xl text-[2.2rem] italic sm:text-[3.4rem]">
            <span className="metal">Una mente diferente, crea una vida diferente.</span>
          </p>

          <div data-reveal className="mx-auto mt-14 max-w-2xl">
            <p className="tag">Última pregunta</p>
            <h2 id="final-title" className="display mt-7 text-[2.2rem] sm:text-[3rem]">
              ¿Cuántas veces más vas a empezar de nuevo?
            </h2>
            <p className="mt-5 text-[1.04rem] text-smoke">
              El ciclo no se rompe solo. Se rompe el día que decides mirarlo.
            </p>
            <p className="mt-7 inline-block bg-umber px-5 py-3.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-sand">
              Domingo 15 de noviembre · Gratis · Nos vemos ahí
            </p>
            <div className="mt-9">
              <CtaButton className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
