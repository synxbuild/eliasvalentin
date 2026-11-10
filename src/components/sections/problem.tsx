import { NOT_NEEDED } from "@/content/landing";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="section-y relative">
      <div aria-hidden className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/60" />
      <div className="container-lux max-w-4xl text-center">
        <p data-reveal className="eyebrow justify-center">
          Lo que casi nadie te dice
        </p>

        <ul className="mt-10 space-y-3 sm:space-y-4">
          {NOT_NEEDED.map((line, i) => (
            <li
              key={line.struck}
              data-reveal
              style={{ "--d": `${i * 0.12}s` } as React.CSSProperties}
              className="font-serif text-[1.55rem] leading-snug text-soft sm:text-[2.1rem]"
            >
              {line.lead} <span className="strike">{line.struck}</span>.
            </li>
          ))}
        </ul>

        <div data-reveal className="mx-auto mt-16 flex max-w-xs items-center gap-4" aria-hidden>
          <span className="hairline flex-1" />
          <span className="text-gold">✦</span>
          <span className="hairline flex-1" />
        </div>

        <h2 id="problem-title" data-reveal className="display mt-14 text-[2.6rem] sm:text-6xl lg:text-[4.4rem]">
          Quizás necesitas transformar <em className="text-gold-grad">a la persona</em> que está detrás de todo eso.
        </h2>

        <p data-reveal className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-soft">
          Puedes cambiar de negocio, de estrategia, de mentor o de oportunidad, pero si sigues operando desde las mismas
          creencias, los mismos miedos y los mismos hábitos, vas a volver a producir resultados parecidos.
        </p>
      </div>
    </section>
  );
}
