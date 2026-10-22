"use client";

import { contactUrls, siteConfig } from "@/config/site";
import { LinkButton } from "@/components/ui/buttons/LinkButton";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    animations: {
      ".cta-phase": {
        from: { opacity: 0, y: 40 },
        to: {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
        },
        individual: true,
        scrollTrigger: { start: "top 90%", end: "+=220", scrub: 1.5 },
      },
      ".cta-actions": {
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        scrollTrigger: { start: "top 96%", end: "+=120", scrub: 1 },
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh overflow-hidden bg-ink text-primary-on-dark-text"
    >
      <div className="site-size horizontal-padding vertical-padding flex min-h-[75svh] flex-col items-center justify-center text-center">
        <p className="cta-phase font-accent text-[0.65rem] uppercase tracking-[0.18em] text-secondary-on-dark-text opacity-0">
          ¿Listo para verlo en tu estudio?
        </p>
        <h2 className="cta-phase mt-8 max-w-5xl font-display text-[16vw] leading-[0.75] tracking-[-.07em] opacity-0 md:text-[10vw]">
          Hablemos
          <br />
          <span className="text-paper-deep">de tu idea</span>
        </h2>
        <p className="cta-phase mt-10 max-w-lg text-base leading-relaxed text-secondary-on-dark-text opacity-0 md:text-lg">
          La demo usa datos e imágenes ficticias. El producto real se adapta a
          la identidad, estructura y necesidades de cada cliente.
        </p>
        <div className="cta-actions mt-8 flex flex-wrap justify-center gap-4 opacity-0">
          <WhatsAppButton>Solicitar una demo</WhatsAppButton>
          <LinkButton
            href={contactUrls.publicWebsite}
            external
            variant="outline"
            text="Ver web real"
          >
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </LinkButton>
        </div>
        <p className="cta-phase mt-8 font-accent text-[0.65rem] text-secondary-on-dark-text opacity-0">
          WhatsApp: {siteConfig.whatsappLabel}
        </p>
      </div>
    </section>
  );
}
