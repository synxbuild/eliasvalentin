"use client";

import { useEffect, useState } from "react";

export type CountdownState = {
  ready: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isOver: boolean;
};

const EMPTY: CountdownState = { ready: false, days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false, isOver: false };

function compute(start: number, end: number): CountdownState {
  const now = Date.now();
  const diff = Math.max(0, start - now);
  return {
    ready: true,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLive: now >= start && now < end,
    isOver: now >= end,
  };
}

/** Ticks once per second on the client. Renders an empty state on the server to avoid hydration mismatches. */
export function useCountdown(startsAt: string, endsAt: string): CountdownState {
  const [state, setState] = useState<CountdownState>(EMPTY);

  useEffect(() => {
    const start = Date.parse(startsAt);
    const end = Date.parse(endsAt);
    const tick = () => setState(compute(start, end));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [startsAt, endsAt]);

  return state;
}
