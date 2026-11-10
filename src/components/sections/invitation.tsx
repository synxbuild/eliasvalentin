import { CalendarDays, Clock3, Hourglass, Mic } from "lucide-react";
import { EVENT } from "@/content/landing";
import { Countdown } from "@/components/ui/countdown";
import { CtaButton } from "@/components/ui/cta-button";
import { Monogram } from "@/components/ui/monogram";
import { SealBadge } from "@/components/ui/seal-badge";

const DETAILS = [
  { icon: CalendarDays, k: "Día", v: EVENT.dateLabel },
  { icon: Clock3, k: "Hora", v: EVENT.timeLabel },
  { icon: Hourglass, k: "Duración", v: EVENT.duration },
  { icon: Mic, k: "Con", v: EVENT.host },
];

/** The event as a premium ticket: details on the left, countdown + CTA on the stub. */
export function Invitation() {
  return (
    <section aria-labelledby="invite-title" className="section-y relative overflow-hidden bg-coal">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div aria-hidden className="glow left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="container-lux relative">
        <div data-reveal className="text-center">
          <p className="eyebrow justify-center">Tu invitación</p>
          <h2 id="invite-title" className="display mt-5 text-[2.6rem] sm:text-6xl">
            Una noche. En vivo. <em className="text-gold-grad">Gratis.</em>
          </h2>
        </div>

        <div data-reveal className="relative mx-auto mt-14 max-w-5xl">
          <SealBadge className="absolute -right-4 -top-12 z-10 hidden sm:block" />

          <div className="card-lux grid overflow-hidden !rounded-[1.75rem] md:grid-cols-[1.35fr_1fr]">
            {/* Ticket body */}
            <div className="relative p-7 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Monogram />
                <span className="rounded-full border border-line-strong px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-hi">
                  {EVENT.platform}
                </span>
              </div>
              <dl className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {DETAILS.map(({ icon: Icon, k, v }) => (
                  <div key={k} className="flex gap-3">
                    <Icon aria-hidden className="mt-1 size-4 shrink-0 text-gold" />
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">{k}</dt>
                      <dd className="mt-1 font-serif text-xl text-cream">{v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Perforation */}
            <div aria-hidden className="relative md:hidden">
              <div className="mx-7 border-t border-dashed border-line-strong" />
              <span className="absolute -left-4 -top-4 size-8 rounded-full bg-coal" />
              <span className="absolute -right-4 -top-4 size-8 rounded-full bg-coal" />
            </div>

            {/* Stub */}
            <div className="relative flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-gold/[0.07] to-transparent p-7 text-center sm:p-10 md:border-l md:border-dashed md:border-line-strong">
              <span aria-hidden className="absolute -left-4 -top-4 hidden size-8 rounded-full bg-coal md:block" />
              <span aria-hidden className="absolute -bottom-4 -left-4 hidden size-8 rounded-full bg-coal md:block" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">Empieza en</p>
              <Countdown variant="large" />
              <CtaButton className="w-full" />
              <p className="text-xs text-muted">Se transmite en vivo una sola noche.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
