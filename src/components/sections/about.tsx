import Image from "next/image";
import { AUTHORITY } from "@/content/landing";
import { StatCounter } from "@/components/ui/stat-counter";

/** Text left, photo right, metallic rule underneath (reference: Clube dos 5% "Pense comigo"). */
export function About() {
  return (
    <section aria-labelledby="about-title" className="relative bg-night">
      <div className="framed border-t border-line">
        <div className="shell grid items-center gap-12 py-24 sm:py-28 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div>
            <div data-reveal>
              <p className="tag">Quién te acompaña</p>
              <h2 id="about-title" className="display mt-7 text-[2.3rem] sm:text-[3rem] lg:text-[3.3rem]">
                Una conversación que puede cambiar <em className="metal font-normal">la forma en la que te ves.</em>
              </h2>
            </div>
            <div data-reveal className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-smoke">
              <p>
                <strong className="font-semibold text-paper">Soy Elías Valentín.</strong> Durante años he estudiado y
                trabajado con personas que querían cambiar sus resultados, y lo que más he visto es que la mayoría quiere
                cambiar lo que tiene sin primero cambiar quién está siendo.
              </p>
              <p>
                Quieren más dinero, más libertad, más impacto y más crecimiento, pero intentan construirlo con los mismos
                patrones que los llevaron hasta donde están.
              </p>
              <p className="text-paper">
                El 15 de noviembre te enseño <strong className="font-semibold">el proceso que he usado durante años</strong>{" "}
                para ayudar a miles de personas a cambiar su manera de pensar y empezar a producir resultados distintos.
              </p>
            </div>
          </div>

          <figure data-reveal style={{ "--d": "0.1s" } as React.CSSProperties} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-graphite">
              <Image
                src="/images/elias-stage-full.webp"
                alt="Elías Valentín en el escenario"
                fill
                sizes="(min-width: 1024px) 30rem, 92vw"
                className="object-cover object-[50%_28%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 rounded-full border border-line-strong bg-night/75 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] backdrop-blur">
                Desde su primera conferencia en 2014
              </figcaption>
            </div>
          </figure>
        </div>

        {/* Metallic rule + authority figures */}
        <div className="shell">
          <div aria-hidden className="h-[3px] bg-gradient-to-r from-gold-deep via-gold-hi to-gold-deep" />
        </div>
        <dl className="shell grid sm:grid-cols-3">
          {AUTHORITY.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
              className="flex flex-col border-line py-9 max-sm:border-b sm:px-8 sm:first:pl-0 sm:[&:not(:last-child)]:border-r"
            >
              <dt className="order-2 mt-3 text-sm leading-snug text-paper">
                {s.label}
                <span className="mt-1 block text-xs text-ash">{s.detail}</span>
              </dt>
              <dd className="display order-1 text-[3.2rem] leading-none">
                <span className="metal">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="h-16" />
      </div>
    </section>
  );
}
