import { About } from "@/components/sections/about";
import { Agenda } from "@/components/sections/agenda";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Fit } from "@/components/sections/fit";
import { Hero } from "@/components/sections/hero";
import { Invitation } from "@/components/sections/invitation";
import { Marquee } from "@/components/sections/marquee";
import { Mechanism } from "@/components/sections/mechanism";
import { MobileCta } from "@/components/sections/mobile-cta";
import { Problem } from "@/components/sections/problem";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Testimonials } from "@/components/sections/testimonials";
import { RevealObserver } from "@/components/ui/reveal-observer";

// Section order mirrors the current live landing; only the design layer changes.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Mechanism />
        <About />
        <Testimonials />
        <Agenda />
        <Invitation />
        <Fit />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
      <RevealObserver />
    </>
  );
}
