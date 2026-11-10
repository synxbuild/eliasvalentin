"use client";

import { EVENT } from "@/content/landing";
import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

type Props = { variant?: "compact" | "boxes"; tone?: "dark" | "light"; className?: string };

export function Countdown({ variant = "compact", tone = "dark", className }: Props) {
  const c = useCountdown(EVENT.startsAt, EVENT.endsAt);
  const units = [
    { v: c.days, l: variant === "boxes" ? "Días" : "d" },
    { v: c.hours, l: variant === "boxes" ? "Horas" : "h" },
    { v: c.minutes, l: variant === "boxes" ? "Minutos" : "m" },
    { v: c.seconds, l: variant === "boxes" ? "Segundos" : "s" },
  ];

  if (c.isLive || c.isOver) {
    return (
      <p className={cn("text-sm font-semibold", className)}>
        {c.isLive ? "Estamos en vivo ahora" : "Esta masterclass ya pasó"}
      </p>
    );
  }

  const label = c.ready ? `Empieza en ${c.days} días, ${c.hours} horas y ${c.minutes} minutos` : "Cuenta regresiva";

  if (variant === "compact") {
    return (
      <p role="timer" aria-label={label} className={cn("font-medium tabular-nums tracking-wide", className)}>
        {units.map((u, i) => (
          <span key={u.l} aria-hidden>
            {c.ready ? pad(u.v) : "--"}
            <span className="text-ash">{u.l}</span>
            {i < units.length - 1 && <span className="px-1 text-ash/50">:</span>}
          </span>
        ))}
      </p>
    );
  }

  // Boxed timer (reference: Clube dos 5% bonus countdown)
  return (
    <div
      role="timer"
      aria-label={label}
      className={cn(
        "inline-flex gap-2 p-2",
        tone === "dark" ? "bg-graphite" : "bg-[#c9c2b6]",
        className,
      )}
    >
      {units.map((u) => (
        <div
          key={u.l}
          className={cn(
            "flex min-w-[4.4rem] flex-col items-center px-3 py-3 sm:min-w-[5.2rem]",
            tone === "dark" ? "bg-night text-paper" : "bg-[#16120e] text-paper",
          )}
        >
          <span className="text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl" aria-hidden>
            {c.ready ? pad(u.v) : "--"}
          </span>
          <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ash" aria-hidden>
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
}
