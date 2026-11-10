import { Countdown } from "@/components/ui/countdown";
import { CtaButton } from "@/components/ui/cta-button";
import { Monogram } from "@/components/ui/monogram";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-night/45 backdrop-blur-xl backdrop-saturate-150 lg:bg-night/75">
      <div className="shell flex h-[3.75rem] items-center sm:h-[4.5rem] justify-between gap-4">
        <a href="#top" aria-label="Elías Valentín · inicio">
          <Monogram />
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden text-right leading-tight md:block">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-ash">Empieza en</p>
            <Countdown className="text-sm text-paper" />
          </div>
          <CtaButton size="sm">Reservar gratis</CtaButton>
        </div>
      </div>
    </header>
  );
}
