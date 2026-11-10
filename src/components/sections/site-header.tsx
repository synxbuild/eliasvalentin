import { Countdown } from "@/components/ui/countdown";
import { CtaButton } from "@/components/ui/cta-button";
import { Monogram } from "@/components/ui/monogram";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-night/90 backdrop-blur-xl">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#top" aria-label="Elías Valentín · inicio">
          <Monogram />
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden text-right leading-tight md:block">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-ash">Empieza en</p>
            <Countdown className="text-sm text-paper" />
          </div>
          <CtaButton className="!min-h-11 !px-5 !text-[0.68rem] before:!size-12">Reservar gratis</CtaButton>
        </div>
      </div>
    </header>
  );
}
