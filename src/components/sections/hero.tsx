import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { LocalTimes } from "@/components/ui/local-times";
import { ZoomMark } from "@/components/ui/zoom-mark";
import { cn } from "@/lib/utils";

/** Photo collage with the cut-out portrait overlapping two framed panels (reference: Clube dos 5% hero). */
function Collage() {
  return (
    <div className="relative mx-auto aspect-[4/4.7] w-full max-w-[33rem] lg:mr-0 lg:max-w-[27rem]">
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
      {/* Outer span enters (rise), inner span floats: two transforms, two elements */}
      <span className="rise absolute right-[4%] top-[50%]" style={{ "--d": "0.5s" } as React.CSSProperties}>
        <span className="flex items-center gap-2.5 rounded-full border border-line-strong bg-night/80 py-2.5 pl-3 pr-5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-paper shadow-[0_20px_40px_-15px_rgb(0_0_0/0.9)] backdrop-blur animate-[float_6s_ease-in-out_infinite]">
          <span className="grid size-6 place-items-center rounded-full bg-[#f07864]/15">
            <span className="size-2 animate-pulse-dot rounded-full bg-[#f07864]" />
          </span>
          100% en vivo
        </span>
      </span>
      <span
        className="rise absolute bottom-[9%] right-[-2%] sm:right-[4%]"
        style={{ "--d": "0.6s" } as React.CSSProperties}
      >
        <span className="flex items-center gap-2.5 rounded-full border border-line-strong bg-night/80 py-2.5 pl-3 pr-5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-paper shadow-[0_20px_40px_-15px_rgb(0_0_0/0.9)] backdrop-blur animate-[float_6s_ease-in-out_-3s_infinite]">
          <ZoomMark className="size-6" />
          Gratis por Zoom
        </span>
      </span>
    </div>
  );
}

const AVATARS = [
  { id: "fabian", name: "Fabián" },
  { id: "joel", name: "Joel" },
  { id: "mike", name: "Mike" },
  { id: "mago", name: "El Mago de Oz" },
];
const AVATAR_Z = ["z-[4]", "z-[3]", "z-[2]", "z-[1]"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative z-20 overflow-x-clip lg:pt-[4.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_78%_40%,rgb(150_100_45/0.22),transparent_70%)]"
      />
      <div className="framed">
        <div className="shell grid items-center gap-x-14 pb-24 sm:pb-28 lg:min-h-[calc(800px-4.5rem)] lg:grid-cols-[1.18fr_0.82fr] lg:gap-x-10 lg:pb-16 lg:pt-6">
          {/* Phones/tablets: Elías opens the screen, the copy rises over the bottom of the photo */}
          <div className="relative -mx-5 h-[23rem] overflow-hidden sm:-mx-10 sm:h-[38rem] lg:hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_38%,rgb(200_150_80/0.3),transparent_72%)]"
            />
            <Image
              src="/brand/ev-monogram.png"
              alt=""
              width={489}
              height={382}
              className="absolute right-[-6%] top-[12%] w-[62%] opacity-[0.08]"
            />
            {/* Starts just under the glass header, which blurs whatever scrolls beneath it */}
            <div className="absolute inset-x-0 bottom-0 top-[4.25rem] sm:top-[5rem]">
              <Image
                src="/images/elias-stage.webp"
                alt="Elías Valentín en el escenario con micrófono"
                fill
                preload
                sizes="(min-width: 640px) 80vw, 100vw"
                className="rise object-cover object-top [mask-image:linear-gradient(to_bottom,black_55%,transparent_96%)]"
              />
            </div>
          </div>

          <div className="relative z-10 -mt-[4.5rem] sm:-mt-32 lg:mt-0">
            {/* Highlighted badge above the promise */}
            <p className="rise inline-flex items-stretch overflow-hidden rounded-full border border-gold/35 bg-white/[0.05] text-[0.66rem] backdrop-blur-md font-semibold uppercase tracking-[0.2em] shadow-[0_0_30px_-8px_rgb(200_162_96/0.45)]">
              <span className="flex items-center gap-2 bg-white/[0.06] py-2 pl-3.5 pr-3 text-paper">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-[#f07864]" />
                En vivo
              </span>
              <span className="flex items-center border-l border-gold/30 px-3.5 py-2">
                <span className="metal">Masterclass gratuita</span>
              </span>
            </p>

            <h1
              id="hero-title"
              className="rise display mt-5 text-[2.45rem] sm:mt-6 sm:text-[3.3rem] lg:text-[3.2rem] xl:text-[3.4rem]"
              style={{ "--d": "0.06s" } as React.CSSProperties}
            >
              Tus resultados no van a cambiar hasta que cambies{" "}
              <em className="metal shine pr-1 font-normal">la versión de ti</em> que los está creando.
            </h1>

            <p
              className="rise mt-4 max-w-[36rem] text-[1.02rem] leading-relaxed text-smoke sm:mt-5 lg:mt-4"
              style={{ "--d": "0.12s" } as React.CSSProperties}
            >
              El domingo 15 de noviembre trabajamos{" "}
              <strong className="font-semibold text-paper">por qué sigues en los mismos patrones</strong>, tomando las
              mismas decisiones y obteniendo resultados que no reflejan lo que sabes que puedes.
            </p>

            <div
              className="rise relative z-30 mt-5 flex flex-wrap items-stretch gap-2 sm:mt-6 lg:mt-5"
              style={{ "--d": "0.18s" } as React.CSSProperties}
            >
              <p className="flex items-center bg-umber px-3.5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-sand sm:px-4 sm:text-[0.72rem] sm:tracking-[0.1em]">
                <span className="sm:hidden">Dom 15 nov · 6:00 PM PR</span>
                <span className="hidden sm:inline">Domingo 15 nov · 6:00 PM de Puerto Rico</span>
              </p>
              <LocalTimes />
            </div>

            <div className="rise mt-5 sm:mt-6 lg:mt-5" style={{ "--d": "0.24s" } as React.CSSProperties}>
              <CtaButton className="w-full sm:w-auto" />
            </div>

            <div
              className="rise mt-6 flex items-center gap-4 border-t border-line pt-5 sm:mt-8 sm:pt-6 lg:mt-6 lg:pt-5"
              style={{ "--d": "0.3s" } as React.CSSProperties}
            >
              {/* Avatars spread apart on hover; each one lifts and shows its name */}
              <ul className="group/av flex shrink-0" aria-label="Algunas personas que trabajaron con Elías">
                {AVATARS.map((a, i) => (
                  <li
                    key={a.id}
                    className={cn(
                      "group/one relative transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:!z-10",
                      AVATAR_Z[i],
                      i > 0 && "-ml-3.5 group-hover/av:-ml-1",
                    )}
                  >
                    <Image
                      src={`/images/t-${a.id}.webp`}
                      alt={a.name}
                      width={44}
                      height={44}
                      className="size-11 rounded-full object-cover ring-[3px] ring-night transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/one:-translate-y-1.5 group-hover/one:scale-110"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute bottom-[calc(100%+0.6rem)] left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full border border-line-strong bg-coal px-2.5 py-1 text-[0.62rem] font-medium text-paper opacity-0 transition duration-300 group-hover/one:translate-y-0 group-hover/one:opacity-100"
                    >
                      {a.name}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.82rem] leading-snug text-smoke">
                <strong className="font-semibold text-paper">+4,000 personas</strong> en La Fórmula del Éxito,
                <br className="hidden sm:block" /> Coca Cola Music Hall (2025).
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <Collage />
          </div>
        </div>
      </div>
    </section>
  );
}
