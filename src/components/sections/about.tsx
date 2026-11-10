import Image from "next/image";
import { AUTHORITY } from "@/content/landing";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";

export function About() {
  return (
    <section aria-labelledby="about-title" className="section-y relative overflow-hidden">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Portrait */}
        <figure data-reveal className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-[radial-gradient(120%_80%_at_50%_100%,rgb(217_177_107/0.35),transparent_60%),linear-gradient(180deg,#17140f,#0b0a08)]">
            <span
              aria-hidden
              className="absolute -right-6 -top-10 select-none font-serif text-[16rem] italic leading-none text-transparent [-webkit-text-stroke:1px_rgb(217_177_107/0.18)]"
            >
              EV
            </span>
            <div aria-hidden className="beam left-1/2 -translate-x-1/2 opacity-60" />
            <Image
              src="/images/elias-stage.webp"
              alt="Elías Valentín"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover object-top pt-8"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
            <figcaption className="absolute inset-x-6 bottom-6 flex items-end justify-between">
              <span>
                <span className="block font-serif text-2xl">Elías Valentín</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-gold">Desde 2014 en escenarios</span>
              </span>
            </figcaption>
          </div>
        </figure>

        {/* Story */}
        <div>
          <SectionHeading id="about-title" eyebrow="Quién te acompaña">
            Una conversación que puede cambiar <em className="text-gold-grad">la forma en la que te ves.</em>
          </SectionHeading>

          <div data-reveal className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-soft">
            <p>
              <strong className="font-semibold text-cream">Soy Elías Valentín.</strong> Durante años he estudiado y
              trabajado con personas que querían cambiar sus resultados, y lo que más he visto es que la mayoría quiere
              cambiar lo que tiene sin primero cambiar quién está siendo.
            </p>
            <p>
              Quieren más dinero, más libertad, más impacto y más crecimiento, pero intentan construirlo con los mismos
              patrones que los llevaron hasta donde están.
            </p>
            <p className="border-l-2 border-gold pl-5 text-cream">
              El 15 de noviembre te enseño el proceso que he usado durante años para ayudar a miles de personas a cambiar
              su manera de pensar y empezar a producir resultados distintos.
            </p>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {AUTHORITY.map((s, i) => (
              <div
                key={s.label}
                data-reveal
                style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
                className="card-lux flex flex-col p-5"
              >
                <dt className="order-2 mt-3 text-sm leading-snug text-cream">
                  {s.label}
                  <span className="mt-1 block text-xs text-muted">{s.detail}</span>
                </dt>
                <dd className="order-1 font-serif text-[2.6rem] leading-none text-gold-grad">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
