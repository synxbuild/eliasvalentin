"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { EVENT, TIMEZONES } from "@/content/landing";

function formatIn(tz: string | undefined) {
  return new Intl.DateTimeFormat("es", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: tz,
    weekday: "short",
  }).format(new Date(EVENT.startsAt));
}

export function TimezoneList() {
  const [local, setLocal] = useState<string | null>(null);

  useEffect(() => {
    // Visitor's own timezone is only known in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocal(formatIn(undefined));
  }, []);

  return (
    <details className="rounded-xl border border-line bg-black/20 px-4 py-3 text-sm">
      <summary className="flex cursor-pointer items-center justify-between gap-3 text-smoke">
        <span className="inline-flex items-center gap-2">
          <Globe aria-hidden className="size-4 text-gold" />
          La hora en tu país
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Ver</span>
      </summary>
      {local && (
        <p className="mt-3 rounded-lg bg-gold/10 px-3 py-2 text-paper">
          En tu zona horaria: <strong className="font-semibold">{local}</strong>
        </p>
      )}
      <ul className="mt-3 divide-y divide-line">
        {TIMEZONES.map((t) => (
          <li key={t.tz} className="flex items-baseline justify-between gap-4 py-2">
            <span className="text-ash">{t.label}</span>
            <span className="shrink-0 tabular-nums text-paper" suppressHydrationWarning>
              {formatIn(t.tz)}
            </span>
          </li>
        ))}
      </ul>
    </details>
  );
}
