import Image from "next/image";
import type { Testimonial } from "@/content/landing";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="card-lux flex h-full flex-col p-6 sm:p-7">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">Su resultado compartido</p>
      <p className="mt-3 font-serif text-[2.1rem] leading-[1.05] text-gold-grad">{t.result}</p>
      <p className="mt-1 text-sm text-soft">{t.resultDetail}</p>

      <div className="hairline my-6" />

      {t.before && t.after ? (
        <ol className="relative space-y-4 pl-6 text-[0.92rem] leading-relaxed">
          <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-muted/40 to-gold" />
          <li className="relative">
            <span aria-hidden className="absolute -left-6 top-1.5 size-[11px] rounded-full border border-muted/60 bg-ink" />
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">Antes</span>
            <span className="text-soft">{t.before}</span>
          </li>
          <li className="relative">
            <span aria-hidden className="absolute -left-6 top-1.5 size-[11px] rounded-full bg-gold shadow-[0_0_12px_rgb(217_177_107/0.7)]" />
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">Después</span>
            <span className="text-cream">{t.after}</span>
          </li>
        </ol>
      ) : (
        <p className="text-[0.92rem] leading-relaxed text-soft">{t.story}</p>
      )}

      {t.quote && (
        <blockquote className="mt-6 font-serif text-lg italic leading-snug text-cream">«{t.quote}»</blockquote>
      )}

      <footer className="mt-auto flex items-center gap-3 pt-7">
        <Image
          src={t.image}
          alt=""
          width={48}
          height={48}
          className="size-12 rounded-full border border-line-strong object-cover"
        />
        <span>
          <span className="block font-semibold text-cream">{t.name}</span>
          <span className="block text-xs text-muted">{t.role}</span>
        </span>
      </footer>
    </article>
  );
}
