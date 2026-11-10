import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

/** Photo collage with the cut-out portrait overlapping two framed panels (reference: Clube dos 5% hero). */
function Collage() {
  return (
    <div className="relative mx-auto aspect-[4/4.7] w-full max-w-[33rem] lg:max-w-none">
      {/* Panel: real event */}
      <figure className="rise absolute right-0 top-0 h-[46%] w-[66%] overflow-hidden rounded-[1.1rem] bg-graphite">
        <Image
          src="/images/lfde-event.webp"
          alt="Reconocimiento en un evento de La Fórmula del Éxito"
          fill
          sizes="(min-width: 1024px) 22rem, 60vw"
          className="scale-110 object-cover object-[78%_30%] opacity-55 blur-[1.5px] grayscale sepia-[45%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_80%_20%,rgb(230_170_90/0.28),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-night/30 to-night/80" />
      </figure>

      {/* Panel: stage */}
      <figure
        className="rise absolute bottom-0 left-0 h-[52%] w-full overflow-hidden rounded-[1.1rem] bg-graphite"
        style={{ "--d": "0.08s" } as React.CSSProperties}
      >
        <Image
          src="/images/elias-stage-full.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 34rem, 92vw"
          className="scale-125 object-cover object-[50%_12%] opacity-60 blur-[2px] grayscale sepia-[40%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(70%_90%_at_70%_20%,rgb(230_170_90/0.32),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
        <Image
          src="/brand/ev-monogram.png"
          alt=""
          width={489}
          height={382}
          className="absolute bottom-[10%] right-[6%] h-[48%] w-auto opacity-25 mix-blend-screen"
        />
      </figure>

      {/* Portrait */}
      <div className="absolute bottom-0 left-[-2%] h-[104%] w-[80%]">
        <Image
          src="/images/elias-stage.webp"
          alt="Elías Valentín en el escenario con micrófono"
          fill
          preload
          sizes="(min-width: 1024px) 28rem, 76vw"
          className="rise object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
          style={{ "--d": "0.15s" } as React.CSSProperties}
        />
      </div>

      {/* Floating labels (reference: Clube dos 5% laptop pills) */}
      <span
        className="rise absolute right-[4%] top-[50%] rounded-full border border-line-strong bg-night/80 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-paper shadow-[0_20px_40px_-15px_rgb(0_0_0/0.9)] backdrop-blur"
        style={{ "--d": "0.5s" } as React.CSSProperties}
      >
        100% en vivo
      </span>
      <span
        className="rise absolute bottom-[9%] right-[-2%] rounded-full border border-line-strong bg-night/80 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-paper shadow-[0_20px_40px_-15px_rgb(0_0_0/0.9)] backdrop-blur sm:right-[4%]"
        style={{ "--d": "0.6s" } as React.CSSProperties}
      >
        Gratis por Zoom
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-[4.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_78%_40%,rgb(150_100_45/0.22),transparent_70%)]"
      />
      <div className="framed">
        <div className="shell grid items-center gap-x-14 gap-y-14 py-14 sm:py-20 lg:grid-cols-[1fr_1.02fr] lg:py-24">
          <div className="relative z-10">
            <p className="rise flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-ash">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-[#f07864]" />
              Masterclass gratuita en vivo
            </p>

            <h1
              id="hero-title"
              className="rise display mt-6 text-[2.55rem] sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[3.9rem]"
              style={{ "--d": "0.06s" } as React.CSSProperties}
            >
              Tus resultados no van a cambiar hasta que cambies{" "}
              <em className="metal pr-1 font-normal">la versión de ti</em> que los está creando.
            </h1>

            <p
              className="rise mt-6 max-w-[33rem] text-[1.04rem] leading-relaxed text-smoke"
              style={{ "--d": "0.12s" } as React.CSSProperties}
            >
              El domingo 15 de noviembre trabajamos{" "}
              <strong className="font-semibold text-paper">por qué sigues en los mismos patrones</strong>, tomando las
              mismas decisiones y obteniendo resultados que no reflejan lo que sabes que puedes.
            </p>

            <p
              className="rise mt-8 inline-block bg-umber px-5 py-3.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-sand"
              style={{ "--d": "0.18s" } as React.CSSProperties}
            >
              Domingo 15 de noviembre · 6:00 PM de Puerto Rico
            </p>

            <div className="rise mt-8" style={{ "--d": "0.24s" } as React.CSSProperties}>
              <CtaButton className="w-full sm:w-auto" />
              <p className="mt-4 text-[0.8rem] italic text-ash">
                Sin costo. El enlace te llega por correo y por WhatsApp.
              </p>
            </div>

            <div
              className="rise mt-10 flex items-center gap-4 border-t border-line pt-7"
              style={{ "--d": "0.3s" } as React.CSSProperties}
            >
              <div className="flex shrink-0" aria-hidden>
                {["fabian", "joel", "mike", "mago"].map((n, i) => (
                  <Image
                    key={n}
                    src={`/images/t-${n}.webp`}
                    alt=""
                    width={44}
                    height={44}
                    style={{ zIndex: 10 - i }}
                    className={cn(
                      "relative size-11 rounded-full object-cover ring-[3px] ring-night",
                      i > 0 && "-ml-3.5",
                    )}
                  />
                ))}
              </div>
              <p className="text-[0.82rem] leading-snug text-smoke">
                <strong className="font-semibold text-paper">+4,000 personas</strong> en La Fórmula del Éxito,
                <br className="hidden sm:block" /> Coca Cola Music Hall (2025).
              </p>
            </div>
          </div>

          <Collage />
        </div>
      </div>
    </section>
  );
}
