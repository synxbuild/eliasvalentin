import { Monogram } from "@/components/ui/monogram";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink pb-28 pt-12 lg:pb-12">
      <div className="container-lux flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <Monogram />
        <div className="max-w-xl space-y-3 text-xs leading-relaxed text-muted md:text-right">
          <p>
            © 2026 Elías Valentín · Todos los derechos reservados ·{" "}
            {/* TODO: point to the client's real privacy policy URL */}
            <a href="#" className="underline decoration-line-strong underline-offset-4 hover:text-cream">
              Política de privacidad
            </a>
          </p>
          <p>
            Esta masterclass es educativa. No promete ingresos ni resultados específicos: lo que cada persona logra
            depende de su trabajo y de sus circunstancias.
          </p>
          <p className="text-muted/70">Concepto de rediseño · SYNX BUILD</p>
        </div>
      </div>
    </footer>
  );
}
