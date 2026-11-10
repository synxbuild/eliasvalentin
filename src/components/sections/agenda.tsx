import Image from "next/image";
import { AGENDA } from "@/content/landing";
import { SectionHeading } from "@/components/ui/section-heading";

/** Laptop with a Zoom-style call and floating pills (reference: Clube dos 5% "Encontros ao vivo"). */
function ZoomLaptop() {
  return (
    <div data-reveal className="relative mx-auto mt-16 max-w-[44rem]">
      <div className="rounded-[1.4rem] border border-line-strong bg-[#1b1a19] p-2.5 shadow-[0_50px_100px_-30px_rgb(0_0_0/0.95)] sm:p-3.5">
        <div className="flex items-center gap-1.5 px-2 pb-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[0.6rem] text-ash">Zoom Meeting</span>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-night">
          <Image
            src="/images/elias-stage-full.webp"
            alt="Elías Valentín hablando en vivo"
            fill
            sizes="(min-width: 768px) 42rem, 92vw"
            className="object-cover object-[50%_30%]"
          />
          <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-[0.6rem] text-paper">
            Elías Valentín
          </span>
          <span className="absolute right-2 top-2 flex items-center gap-1.5 rounded bg-[#e5484d] px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white">
            <span className="size-1.5 rounded-full bg-white" /> En vivo
          </span>
        </div>
        <div className="flex items-center justify-between px-3 pt-2.5 text-[0.55rem] text-ash" aria-hidden>
          <span>Audio · Video</span>
          <span className="hidden sm:inline">Participantes · Chat · Reacciones</span>
          <span className="rounded bg-[#e5484d] px-2 py-0.5 text-white">Salir</span>
        </div>
      </div>
      <span className="absolute -left-3 top-[38%] rounded-full border border-line-strong bg-gradient-to-b from-[#2a2826] to-[#121110] px-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.12em] shadow-[0_20px_40px_-15px_rgb(0_0_0/0.9)] sm:-left-16">
        Una sola noche
      </span>
      <span className="absolute -right-3 top-[18%] rounded-full border border-line-strong bg-gradient-to-b from-[#2a2826] to-[#121110] px-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.12em] shadow-[0_20px_40px_-15px_rgb(0_0_0/0.9)] sm:-right-16">
        Unas 2 horas
      </span>
    </div>
  );
}

export function Agenda() {
  return (
    <section id="agenda" aria-labelledby="agenda-title" className="relative bg-night">
      <div className="framed">
        <div className="shell pb-20 pt-24 sm:pt-28">
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

        <ol className="border-t border-line">
          {AGENDA.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--d": `${(i % 2) * 0.06}s` } as React.CSSProperties}
              className="border-b border-line"
            >
              <div className="shell grid gap-4 py-9 sm:grid-cols-[6rem_1fr_1fr] sm:items-baseline sm:gap-10">
                <span className="tag w-fit">0{i + 1}</span>
                <h3 className="display text-[1.55rem] sm:text-[1.75rem]">{item.title}</h3>
                <p className="leading-relaxed text-smoke">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="h-24" />
      </div>
    </section>
  );
}
