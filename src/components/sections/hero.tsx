import Image from "next/image";
import { CalendarDays, Clock3, Video } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { RegistrationCard } from "@/components/ui/registration-card";
import { SealBadge } from "@/components/ui/seal-badge";

const FACTS = [
  { icon: CalendarDays, label: "Domingo 15 de noviembre" },
  { icon: Clock3, label: "6:00 PM de Puerto Rico" },
  { icon: Video, label: "En vivo por Zoom · 2 h aprox." },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-24 sm:pt-28 xl:pt-32">
      {/* Stage lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="beam left-[2%] rotate-[22deg] opacity-70" />
        <div className="beam left-[42%] -rotate-[8deg] xl:left-[46%]" />
        <div className="beam right-[4%] -rotate-[24deg] opacity-50" />
        <div className="glow left-1/2 top-[38%] size-[42rem] -translate-x-1/2 opacity-60" />
        <p className="absolute inset-x-0 top-[18%] select-none text-center font-serif text-[22vw] italic leading-none text-transparent [-webkit-text-stroke:1px_rgb(217_177_107/0.08)] xl:text-[15rem]">
          Masterclass
        </p>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-lux grid gap-y-10 pb-16 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-x-12 lg:pb-24 xl:grid-cols-[minmax(0,1fr)_minmax(0,19rem)_24rem] xl:gap-x-6">
        {/* Copy */}
        <div className="relative z-10">
          <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-black/30 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-soft">
            <span className="size-2 animate-pulse-dot rounded-full bg-[#f07864]" />
            Masterclass gratuita en vivo
          </p>

          <h1
            id="hero-title"
            className="rise display mt-6 text-[2.5rem] sm:text-[3.4rem] lg:text-[3.5rem] xl:text-[3.35rem]"
            style={{ "--d": "0.08s" } as React.CSSProperties}
          >
            Tus resultados no van a cambiar hasta que cambies{" "}
            <em className="text-gold-grad">la versión de ti</em> que los está creando.
          </h1>

          <p
            className="rise mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-soft"
            style={{ "--d": "0.16s" } as React.CSSProperties}
          >
            Una noche en vivo con <strong className="font-semibold text-cream">Elías Valentín</strong> para entender por
            qué sigues en los mismos patrones, tomando las mismas decisiones y obteniendo resultados que no reflejan lo
            que sabes que puedes.
          </p>

          <ul
            className="rise mt-7 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-1"
            style={{ "--d": "0.24s" } as React.CSSProperties}
          >
            {FACTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-cream">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line bg-gold/5">
                  <Icon aria-hidden className="size-4 text-gold" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="rise mt-8 lg:hidden" style={{ "--d": "0.32s" } as React.CSSProperties}>
            <CtaButton className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Portrait on stage (mobile, tablet and wide desktop) */}
        <div className="relative z-0 mx-auto -mb-28 h-[26rem] w-full max-w-[22rem] sm:h-[30rem] lg:hidden xl:-mx-14 xl:mb-0 xl:block xl:h-[40rem] xl:w-auto xl:max-w-none">
          <div aria-hidden className="glow inset-x-0 bottom-10 mx-auto h-56 w-64 opacity-80" />
          <Image
            src="/images/elias-stage.webp"
            alt="Elías Valentín en el escenario con micrófono"
            fill
            preload
            sizes="(min-width: 1280px) 420px, (min-width: 640px) 360px, 90vw"
            className="rise object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
            style={{ "--d": "0.12s" } as React.CSSProperties}
          />
          <SealBadge className="absolute right-0 top-6 xl:right-4 xl:top-14" />
        </div>

        {/* Registration */}
        <div id="registro" className="rise relative z-10 scroll-mt-24" style={{ "--d": "0.28s" } as React.CSSProperties}>
          <RegistrationCard />
        </div>
      </div>
    </section>
  );
}
