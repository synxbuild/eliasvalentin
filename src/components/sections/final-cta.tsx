import { BrandLockup } from "@/components/ui/brand-lockup";
import { CtaButton } from "@/components/ui/cta-button";
import LightRays from "@/components/ui/light-rays";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-night">
      {/* Warm gold light falling from the top (React Bits LightRays, WebGL; pauses off-screen) */}
      <div aria-hidden className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f1ddb0"
          raysSpeed={0.8}
          lightSpread={0.55}
          rayLength={2.2}
          glow={0.5}
          haze={0.3}
          atmosphere={0.15}
          saturation={0.9}
          intensity={0.85}
          opacity={0.9}
          followMouse
          mouseInfluence={0.08}
          cursorShadow={false}
          clickPulse={false}
        />
      </div>
      <div className="framed">
        <div className="shell relative py-28 text-center sm:py-36">
          <div data-reveal>
            <BrandLockup size="lg" />
          </div>
          <p
            data-reveal
            className="display mx-auto mt-8 max-w-3xl text-[2.7rem] italic leading-[1.04] sm:mt-10 sm:text-[3rem] lg:text-[3.4rem]"
          >
            <span className="metal shine">Una mente diferente, crea una vida diferente.</span>
          </p>

          <div data-reveal className="mx-auto mt-14 max-w-2xl">
            <p className="tag">Última pregunta</p>
            <h2 id="final-title" className="display mt-7 text-[2.2rem] sm:text-[3rem]">
              ¿Cuántas veces más vas a empezar de nuevo?
            </h2>
            <p className="mt-5 text-[1.04rem] text-smoke">
              El ciclo no se rompe solo. Se rompe el día que decides mirarlo.
            </p>
            <p className="mt-7 inline-block text-balance bg-umber px-5 py-3.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-sand">
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
