import { RegistrationForm } from "./registration-form";
import { TimezoneList } from "./timezone-list";
import { EVENT } from "@/content/landing";

export function RegistrationCard() {
  return (
    <div className="space-y-3">
      <div className="card-lux p-5 sm:p-7">
        <div
          aria-hidden
          className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <div className="mb-6">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-hi">
            Gratis · 1 minuto
          </span>
          <h2 className="display mt-4 text-[2rem] leading-none">Reserva tu lugar</h2>
          <p className="mt-2 text-sm text-muted">
            {EVENT.dateLabel} · {EVENT.shortTime}
          </p>
        </div>
        <RegistrationForm />
      </div>
      <TimezoneList />
    </div>
  );
}
