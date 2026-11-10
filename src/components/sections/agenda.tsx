import Image from "next/image";
import { AgendaTimeline } from "@/components/ui/agenda-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { ZoomMark } from "@/components/ui/zoom-mark";
import { Clock, Moon } from "lucide-react";

const PILL =
  "flex items-center gap-2 rounded-full border border-line-strong bg-gradient-to-b from-[#2a2826] to-[#121110] px-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.12em] shadow-[0_20px_40px_-15px_rgb(0_0_0/0.9)]";

/**
 * Laptop showing the live session: the La Fórmula del Éxito banner as the shared screen
 * (slow drift + glare pass) and Elías' camera tile in the corner (reference: Clube dos 5% "Encontros ao vivo").
 */
function ZoomLaptop() {
  return (
    <div data-reveal className="relative mx-auto mt-9 max-w-[44rem] sm:mt-14">
      {/* Lid */}
      <div className="rounded-t-[1.2rem] border border-b-0 border-line-strong bg-gradient-to-b from-[#232120] to-[#141312] p-2 pb-2.5 shadow-[0_50px_100px_-30px_rgb(0_0_0/0.95)] sm:p-3 sm:pb-3.5">
        <div className="mx-auto mb-2 size-1.5 rounded-full bg-[#2e2c2a] ring-1 ring-black/60 sm:mb-2.5" aria-hidden />
        <div className="relative aspect-[16/9] overflow-hidden rounded-[0.35rem] bg-black">
          {/* Ambient fill from the banner itself, so the letterbox never reads as empty */}
          <Image
            src="/images/lfde-banner.webp"
            alt=""
            fill
            sizes="10rem"
            className="scale-150 object-cover opacity-70 blur-2xl"
          />
          <div className="absolute inset-x-0 top-1/2 h-[68%] -translate-y-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex h-full animate-[screen-drift_20s_ease-in-out_infinite_alternate] justify-center">
              <Image
                src="/images/lfde-banner.webp"
                alt="Elías Valentín · La Fórmula del Éxito"
                width={1707}
                height={282}
                sizes="(min-width: 768px) 80rem, 190vw"
                className="h-full w-auto max-w-none"
              />
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 animate-[screen-glare_9s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
          </div>

          {/* Speaker camera tile */}
          <div className="absolute bottom-2.5 right-2.5 w-[22%] overflow-hidden rounded-[0.3rem] ring-1 ring-white/15 shadow-[0_12px_30px_-10px_rgb(0_0_0/0.9)] sm:bottom-3.5 sm:right-3.5">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/elias-chair.webp"
                alt="Elías Valentín en cámara"
                fill
                sizes="11rem"
                className="object-cover object-[50%_14%]"
              />
            </div>
            <span className="absolute bottom-1 left-1 rounded-[0.2rem] bg-black/65 px-1.5 py-0.5 text-[0.45rem] text-paper sm:text-[0.55rem]">
              Elías Valentín
            </span>
          </div>

          <span className="absolute left-2.5 top-2.5 flex items-stretch overflow-hidden rounded-full border border-white/10 bg-black/60 text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-paper backdrop-blur sm:left-3.5 sm:top-3.5 sm:text-[0.58rem]">
            <span className="flex items-center gap-1.5 border-r border-white/10 py-1 pl-1 pr-2 normal-case tracking-normal">
              <ZoomMark className="size-3.5 sm:size-4" />
              <span className="text-[0.55rem] font-semibold sm:text-[0.62rem]">Zoom</span>
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-[#f07864]" /> En vivo
            </span>
          </span>
        </div>
      </div>
      {/* Base */}
      <div aria-hidden className="relative -mx-[5%] h-3 rounded-b-[0.9rem] bg-gradient-to-b from-[#3a3735] via-[#1f1d1c] to-[#0d0c0b] shadow-[0_24px_40px_-14px_rgb(0_0_0/0.9)] sm:h-4">
        <div className="mx-auto h-1.5 w-[16%] rounded-b-md bg-[#0d0c0b]/80" />
      </div>
      {/* Floating pills on the laptop edges from sm up; a simple row under it on phones */}
      <div className="mt-7 flex justify-center gap-3 sm:contents">
        <span className={cn(PILL, "sm:absolute sm:-left-16 sm:top-[58%]")}>
          <Moon aria-hidden className="size-3.5 text-gold-hi" />
          Una sola noche
        </span>
        <span className={cn(PILL, "sm:absolute sm:-right-16 sm:top-[16%]")}>
          <Clock aria-hidden className="size-3.5 text-gold-hi" />
          Unas 2 horas
        </span>
      </div>
    </div>
  );
}

export function Agenda() {
  return (
    <section id="agenda" aria-labelledby="agenda-title" className="relative bg-night">
      <div className="framed">
        <div className="shell pb-10 pt-20 sm:pb-20 sm:pt-28">
          <SectionHeading
            id="agenda-title"
            eyebrow="Domingo 15 de noviembre · 6:00 PM"
            className="max-w-3xl"
            lead="En vivo por Zoom, con espacio para preguntas al final."
          >
            Lo que vamos a trabajar <em className="metal font-normal">esa noche</em>
          </SectionHeading>
          <ZoomLaptop />
        </div>

        <div className="border-t border-line pt-6">
          <AgendaTimeline />
        </div>
        <div className="h-20" />
      </div>
    </section>
  );
}
