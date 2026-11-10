import Image from "next/image";
import type { Testimonial } from "@/content/landing";

/** Dark card on the bone section (reference: Clube dos 5% "As transformações falam por si"). */
export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.1rem] bg-night text-paper shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)]">
      <div className="relative border-b border-line px-6 pb-6 pt-7">
        <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_100%_at_20%_0%,rgb(200_162_96/0.18),transparent)]" />
        <p className="relative text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ash">Su resultado compartido</p>
        <p className="display relative mt-3 text-[2.2rem] leading-none">
          <span className="metal">{t.result}</span>
        </p>
        <p className="relative mt-2 text-sm text-smoke">{t.resultDetail}</p>
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        {t.before && t.after ? (
          <dl className="space-y-4 text-[0.92rem] leading-relaxed">
            <div>
              <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ash">Antes</dt>
              <dd className="mt-1 text-smoke">{t.before}</dd>
            </div>
            <div>
              <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold">Después</dt>
              <dd className="mt-1 text-paper">{t.after}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-[0.92rem] leading-relaxed text-smoke">{t.story}</p>
        )}

        {t.quote && (
          <blockquote className="mt-5 font-serif text-[1.15rem] font-light italic leading-snug text-paper">
            “{t.quote}”
          </blockquote>
        )}

        <div aria-hidden className="min-h-6 flex-1" />

        <footer className="flex items-center gap-3 border-t border-line pt-5">
          <Image src={t.image} alt="" width={44} height={44} className="size-11 rounded-full object-cover grayscale-[15%]" />
          <span>
            <span className="block text-sm font-semibold">{t.name}</span>
            <span className="block text-xs text-ash">{t.role}</span>
          </span>
        </footer>
      </div>
    </article>
  );
}
