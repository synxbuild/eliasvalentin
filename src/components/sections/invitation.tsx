import { EVENT } from "@/content/landing";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { Countdown } from "@/components/ui/countdown";
import { CtaButton } from "@/components/ui/cta-button";

const DETAILS = [
  { k: "Día", v: EVENT.dateLabel },
  { k: "Hora", v: EVENT.timeLabel },
  { k: "Duración", v: EVENT.duration },
  { k: "Con", v: EVENT.host },
];

/** Offer block: bone header with countdown, black card with hatch sides (reference: Clube dos 5% offer). */
export function Invitation() {
  return (
    <section aria-labelledby="invite-title" className="relative">
      <div className="bg-bone text-[#16120e]">
        <div className="framed [border-color:var(--color-rule)]">
          <div data-reveal className="shell pb-16 pt-24 text-center sm:pt-28">
            <p className="tag-light">Tu invitación</p>
            <h2 id="invite-title" className="display mt-7 text-[2.5rem] sm:text-[3.4rem]">
              Una noche. En vivo. <em className="font-normal italic text-gold-deep">Gratis.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[#4f4941]">
              Se transmite en vivo una sola noche. Reserva tu lugar y te mandamos el enlace.
            </p>
            <Countdown variant="boxes" tone="light" className="mt-10" />
          </div>
        </div>
      </div>

      <div className="relative bg-night">
        <div className="hatch absolute inset-0" aria-hidden />
        <div className="framed">
          <div className="relative mx-auto max-w-[36rem] px-5 sm:px-0">
            <p className="-mt-px bg-gradient-to-r from-gold-deep via-gold to-gold-deep px-6 py-3.5 text-center text-[0.8rem] font-medium text-night">
              Para registrarte solo necesitas <strong className="font-bold">un minuto</strong>.
            </p>
            <div data-reveal className="border-x border-b border-line bg-night px-7 pb-9 pt-9 text-center sm:px-10">
              <BrandLockup />
              <div className="mx-auto my-7 h-px w-full bg-line-strong" />
              <p className="bg-graphite px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-sand">
                Masterclass gratuita · {EVENT.platform}
              </p>
              <p className="display mt-7 text-[4.4rem] leading-none sm:text-[5.2rem]">
                <span className="metal">Gratis</span>
              </p>
              <p className="mt-2 text-sm text-ash">Solo necesitas registrarte para recibir el enlace.</p>

              <dl className="mt-8 grid grid-cols-2 border-y border-line text-left">
                {DETAILS.map((d, i) => (
                  <div
                    key={d.k}
                    className={`py-4 ${i % 2 === 0 ? "border-r border-line pr-4" : "pl-4"} ${i < 2 ? "border-b border-line" : ""}`}
                  >
                    <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ash">{d.k}</dt>
                    <dd className="mt-1 text-[0.92rem] text-paper">{d.v}</dd>
                  </div>
                ))}
              </dl>

              <CtaButton className="mt-9 w-full" />
              <p className="mt-4 text-xs italic text-ash">Te llega el enlace por correo y WhatsApp, más un recordatorio.</p>
              <div className="mx-auto mt-7 h-px w-full bg-line" />
              <p className="mt-5 text-xs text-smoke">Sin costo · Tu número no se comparte · Una sola noche</p>
            </div>
          </div>
          <div className="h-24" />
        </div>
      </div>
    </section>
  );
}
