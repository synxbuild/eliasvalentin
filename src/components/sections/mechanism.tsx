import Image from "next/image";
import { LAYERS } from "@/content/landing";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/**
 * Bone section with a "price ladder" of attempts (reference: Clube dos 5% pricing ladder):
 * the first two fade out, the third is the one that changes everything, then a black card closes it.
 */
export function Mechanism() {
  return (
    <section aria-labelledby="mech-title" className="relative">
      <div className="bg-bone text-[#16120e]">
        <div className="framed [border-color:var(--color-rule)]">
          <div className="shell pb-16 pt-24 sm:pt-28">
            <SectionHeading
              id="mech-title"
              tone="light"
              eyebrow="Por qué vuelve el mismo resultado"
              className="max-w-3xl"
              lead="Cambiar lo de afuera funciona un rato. Lo que decide el resultado está un nivel más abajo."
            >
              Tus resultados repiten <em className="font-normal italic text-gold-deep">la identidad</em> desde la que
              decides.
            </SectionHeading>

            <ol className="mx-auto mt-14 max-w-[36rem] border border-rule bg-bone-hi/40">
              {LAYERS.map((l, i) => {
                const core = i === LAYERS.length - 1;
                return (
                  <li
                    key={l.step}
                    data-reveal
                    style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
                    className={cn(
                      "mx-8 py-8 text-center sm:mx-12",
                      i < LAYERS.length - 1 && "border-b border-rule",
                    )}
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#7a7268]">
                      {l.step} · {l.title}
                    </p>
                    <p
                      className={cn(
                        "display mt-3 text-[1.7rem] sm:text-[2rem]",
                        core ? "text-[#16120e]" : "text-[#8c857b]",
                      )}
                    >
                      {core ? l.body : <span className="strike">{l.body}</span>}
                    </p>
                    <p className={cn("mt-2 text-sm", core ? "font-semibold text-[#16120e]" : "text-[#8c857b]")}>
                      {l.outcome}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* Black closing card hanging from the bone section, hatch on the sides */}
      <div className="relative bg-night">
        <div className="hatch absolute inset-x-0 top-0 h-full" aria-hidden />
        <div className="framed">
          <div className="relative mx-auto max-w-[36rem] px-5 sm:px-0">
            <p className="-mt-px bg-gradient-to-r from-gold-deep via-gold to-gold-deep px-6 py-3.5 text-center text-[0.8rem] font-medium text-night">
              Ese nivel es el que trabajamos <strong className="font-bold">el domingo 15 de noviembre.</strong>
            </p>
            <div data-reveal className="border-x border-b border-line bg-night px-7 pb-10 pt-10 text-center sm:px-10">
              <Image src="/brand/ev-monogram.png" alt="" width={489} height={382} className="mx-auto h-10 w-auto" />
              <div className="mx-auto my-7 h-px w-full bg-line-strong" />
              <p className="display text-[2rem] sm:text-[2.4rem]">
                Trabajar primero en ti, <em className="metal font-normal">para que lo de afuera cambie después.</em>
              </p>
              <CtaButton className="mt-9 w-full sm:w-auto" />
              <p className="mt-4 text-xs italic text-ash">Domingo 15 de noviembre · 6:00 PM PR · Gratis</p>
            </div>
          </div>
          <div className="h-20" />
        </div>
      </div>
    </section>
  );
}
