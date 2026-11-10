"use client";

import { EVENT } from "@/content/landing";
import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

type Props = { variant?: "compact" | "large"; className?: string };

export function Countdown({ variant = "compact", className }: Props) {
  const c = useCountdown(EVENT.startsAt, EVENT.endsAt);
  const units = [
    { v: c.days, l: "días" },
    { v: c.hours, l: "hrs" },
    { v: c.minutes, l: "min" },
    { v: c.seconds, l: "seg" },
  ];

  if (c.isLive || c.isOver) {
    return (
      <p className={cn("text-sm font-semibold text-gold", className)}>
        {c.isLive ? "Estamos en vivo ahora" : "Esta masterclass ya pasó"}
      </p>
    );
  }

  const large = variant === "large";

  return (
    <div
      className={cn("flex items-stretch", large ? "gap-2 sm:gap-3" : "gap-1.5", className)}
      role="timer"
      aria-label={c.ready ? `Empieza en ${c.days} días, ${c.hours} horas y ${c.minutes} minutos` : "Cuenta regresiva"}
    >
      {units.map((u) => (
        <div
          key={u.l}
          className={cn(
            "flex flex-col items-center justify-center tabular-nums",
            large
              ? "min-w-[4.25rem] rounded-xl border border-line bg-black/30 px-2 py-3 sm:min-w-[5rem]"
              : "min-w-[2.4rem]",
          )}
        >
          <span
            className={cn(
              "font-serif leading-none text-cream",
              large ? "text-3xl sm:text-4xl" : "text-lg",
            )}
            aria-hidden
          >
            {c.ready ? pad(u.v) : "--"}
          </span>
          <span
            className={cn(
              "uppercase tracking-[0.18em] text-muted",
              large ? "mt-2 text-[0.65rem]" : "mt-0.5 text-[0.55rem]",
            )}
            aria-hidden
          >
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
}
