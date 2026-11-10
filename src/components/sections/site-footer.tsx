import { Monogram } from "@/components/ui/monogram";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-night pb-28 lg:pb-0">
      <div className="framed">
        <div className="shell flex flex-col gap-6 py-10 text-xs text-ash md:flex-row md:items-center md:justify-between">
          <Monogram />
          <p className="max-w-md leading-relaxed md:text-center">
            Esta masterclass es educativa. No promete ingresos ni resultados específicos: lo que cada persona logra
            depende de su trabajo y de sus circunstancias.
          </p>
          <p className="md:text-right">
            © 2026 Elías Valentín ·{" "}
            {/* TODO: point to the client's real privacy policy URL */}
            <a href="#" className="underline decoration-line-strong underline-offset-4 hover:text-paper">
              Privacidad
            </a>
            <span className="mt-1 block text-ash/60">Concepto de rediseño · SYNX BUILD</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
