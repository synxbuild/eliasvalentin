"use client";

import { useId, useState } from "react";
import { ArrowRight, CalendarPlus, CheckCircle2, Loader2, Lock, Mail, MessageCircle } from "lucide-react";
import PhoneInput, { isValidPhoneNumber, type Country } from "react-phone-number-input";
import phoneLabelsEs from "react-phone-number-input/locale/es";
import { EVENT } from "@/content/landing";
import { useCountdown } from "@/hooks/use-countdown";
import { GlowButton } from "./glow-button";
import { PhoneCountrySelect } from "./phone-country-select";

type Fields = { nombre: string; email: string; telefono: string; consent: boolean };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Audience: Puerto Rico first, then the rest of the Americas and Spain.
const COUNTRY_ORDER: (Country | "|" | "...")[] = [
  "PR", "US", "DO", "MX", "CO", "VE", "AR", "CL", "PE", "EC", "ES", "|", "...",
];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.nombre.trim().length < 3) e.nombre = "Escribe tu nombre completo.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Revisa tu correo, parece incompleto.";
  if (!f.telefono || !isValidPhoneNumber(f.telefono)) e.telefono = "Revisa tu número, parece incompleto.";
  if (!f.consent) e.consent = "Necesitamos tu permiso para enviarte el enlace.";
  return e;
}

function buildCalendarHref() {
  const fmt = (iso: string) => iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Masterclass gratuita con Elías Valentín",
    dates: `${fmt(EVENT.startsAt)}/${fmt(EVENT.endsAt)}`,
    details: "En vivo por Zoom. El enlace llega por correo y WhatsApp.",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const LABEL = "mb-1.5 block text-[0.78rem] font-medium text-smoke";

export function RegistrationForm() {
  const uid = useId();
  const status = useCountdown(EVENT.startsAt, EVENT.endsAt);
  const [fields, setFields] = useState<Fields>({
    nombre: "",
    email: "",
    telefono: "",
    consent: false,
  });
  const [country, setCountry] = useState<Country | undefined>("PR");
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    const next = { ...fields, [k]: v };
    setFields(next);
    if (touched) setErrors(validate(next));
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    if (data.get("website")) return; // honeypot
    setTouched(true);
    const e = validate(fields);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    // DEMO: nothing is sent anywhere. Wire this to the real CRM/webhook before going live.
    setState("sending");
    window.setTimeout(() => setState("done"), 1100);
  };

  if (status.isOver) {
    return (
      <div className="py-6 text-center">
        <h3 className="display text-3xl">Esta masterclass ya pasó</h3>
        <p className="mt-3 text-smoke">Si te registraste, revisa tu correo y tu WhatsApp: ahí te llega lo que sigue.</p>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div className="py-2" role="status" aria-live="polite">
        <CheckCircle2 aria-hidden className="size-10 text-gold" />
        <h3 className="display mt-4 text-3xl">
          Listo, {fields.nombre.trim().split(" ")[0]}. <span className="metal">Tu lugar está reservado.</span>
        </h3>
        <ul className="mt-6 space-y-3 text-sm text-smoke">
          <li className="flex gap-3">
            <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-gold" />
            <span>
              Te llega el enlace de acceso a <strong className="break-all text-paper">{fields.email}</strong>.
            </span>
          </li>
          <li className="flex gap-3">
            <MessageCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-gold" />
            Y por WhatsApp, con un recordatorio el mismo día.
          </li>
        </ul>
        <a href={buildCalendarHref()} target="_blank" rel="noreferrer" className="btn-line mt-6 w-full">
          <CalendarPlus aria-hidden className="size-4" />
          Agregar a mi calendario
        </a>
        <p className="mt-5 rounded-lg border border-dashed border-line-strong px-3 py-2 text-center text-[0.7rem] uppercase tracking-[0.16em] text-ash">
          Demo de diseño · no se envió ningún dato
        </p>
      </div>
    );
  }

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-1.5 text-xs text-danger">
        {errors[k]}
      </p>
    ) : null;

  const a11y = (k: keyof Fields) => ({
    id: `${uid}-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className="relative space-y-4">
      <div>
        <label htmlFor={`${uid}-nombre`} className={LABEL}>
          Nombre completo
        </label>
        <input
          {...a11y("nombre")}
          className="field"
          name="nombre"
          autoComplete="name"
          placeholder="Tu nombre y apellido"
          value={fields.nombre}
          onChange={(e) => set("nombre", e.target.value)}
        />
        {err("nombre")}
      </div>

      <div>
        <label htmlFor={`${uid}-email`} className={LABEL}>
          Correo electrónico
        </label>
        <input
          {...a11y("email")}
          className="field"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
        />
        {err("email")}
      </div>

      <div>
        <label htmlFor={`${uid}-telefono`} className={LABEL}>
          WhatsApp <span className="text-ash">· para el enlace y el recordatorio</span>
        </label>
        <PhoneInput
          {...a11y("telefono")}
          className={errors.telefono ? "field reg-phone is-invalid" : "field reg-phone"}
          name="telefono"
          defaultCountry="PR"
          international={false}
          labels={phoneLabelsEs}
          countrySelectComponent={PhoneCountrySelect}
          countryOptionsOrder={COUNTRY_ORDER}
          onCountryChange={setCountry}
          placeholder={country === "PR" || country === "US" ? "(787) 000-0000" : "Número de WhatsApp"}
          value={fields.telefono || undefined}
          onChange={(v) => set("telefono", v ?? "")}
        />
        {err("telefono")}
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          No llenes este campo
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[0.8rem] leading-relaxed text-ash">
          <input
            {...a11y("consent")}
            type="checkbox"
            className="mt-0.5 size-[1.1rem] shrink-0 cursor-pointer accent-[#c8a260]"
            checked={fields.consent}
            onChange={(e) => set("consent", e.target.checked)}
          />
          <span>
            Acepto recibir por WhatsApp la confirmación, los recordatorios y los enlaces de esta masterclass de Elías
            Valentín.
          </span>
        </label>
        {err("consent")}
      </div>

      <GlowButton type="submit" className="w-full" disabled={state === "sending"}>
        {state === "sending" ? (
          <>
            <Loader2 aria-hidden className="size-4 animate-spin" />
            <span>Reservando tu lugar…</span>
          </>
        ) : (
          <>
            <span>{EVENT.cta}</span>
            <ArrowRight aria-hidden className="size-4" />
          </>
        )}
      </GlowButton>

      <p className="flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-ash">
        <Lock aria-hidden className="mt-0.5 size-3.5 shrink-0" />
        <span>
          Te llega el enlace por correo y WhatsApp, más un recordatorio el mismo día. Sin costo. Tu número no se
          comparte con nadie.
        </span>
      </p>
    </form>
  );
}
