import { Countdown } from "@/components/ui/countdown";
import { Monogram } from "@/components/ui/monogram";
import { EVENT } from "@/content/landing";

export function SiteHeader() {
  return (
    <>
      <a
        href="#registro"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Ir directo al formulario de registro
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/55">
        <div className="container-lux flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <a href="#top" aria-label="Elías Valentín · inicio">
            <Monogram />
          </a>
          <div className="hidden items-center gap-4 md:flex">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">Empieza en</span>
            <Countdown />
          </div>
          <a href={EVENT.registerHref} className="btn-gold !min-h-10 !px-4 !py-2 text-[0.8rem] sm:!px-5">
            <span className="sm:hidden">Reservar gratis</span>
            <span className="hidden sm:inline">{EVENT.cta}</span>
          </a>
        </div>
      </header>
    </>
  );
}
