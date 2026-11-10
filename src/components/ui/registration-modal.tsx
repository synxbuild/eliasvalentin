"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { EVENT } from "@/content/landing";
import { RegistrationForm } from "./registration-form";

const OpenContext = createContext<() => void>(() => {});

export const useOpenRegistration = () => useContext(OpenContext);

/** Native <dialog>: focus trap, Esc to close and inert background come for free. */
export function RegistrationProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  // Deep link: /#registro opens the form directly.
  useEffect(() => {
    if (window.location.hash === "#registro") open();
  }, [open]);

  const onBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) e.currentTarget.close();
  };

  return (
    <OpenContext.Provider value={open}>
      {children}
      <dialog ref={ref} className="reg-dialog" aria-labelledby="reg-title" onClick={onBackdrop}>
        <div className="relative max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[1.5rem] border border-line-strong bg-coal shadow-[0_40px_120px_-20px_rgb(0_0_0/0.9)]">
          {/* Top band */}
          <div className="relative overflow-hidden border-b border-line px-6 pb-6 pt-7 sm:px-8">
            <div
              aria-hidden
              className="absolute -right-10 -top-16 size-56 rounded-full bg-[radial-gradient(closest-side,rgb(226_170_90/0.35),transparent)] blur-2xl"
            />
            <Image src="/brand/ev-monogram.png" alt="" width={489} height={382} className="relative h-9 w-auto" />
            <p className="tag relative mt-5">Masterclass gratuita</p>
            <h2 id="reg-title" className="display relative mt-4 text-[2rem] leading-tight sm:text-[2.3rem]">
              Reserva tu lugar para el <em className="metal not-italic">15 de noviembre</em>
            </h2>
            <p className="relative mt-2 text-sm text-ash">
              {EVENT.timeLabel} · {EVENT.platform} · {EVENT.duration.toLowerCase()}
            </p>
          </div>

          <div className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
            <RegistrationForm />
          </div>

          <form method="dialog" className="absolute right-3 top-3">
            <button
              aria-label="Cerrar"
              className="grid size-10 place-items-center rounded-full border border-line-strong bg-night/60 text-smoke transition hover:text-paper"
            >
              <X aria-hidden className="size-4" />
            </button>
          </form>
        </div>
      </dialog>
    </OpenContext.Provider>
  );
}
