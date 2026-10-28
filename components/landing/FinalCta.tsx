"use client";

import { RollText } from "@/components/gsap/RollText";
import { LinkButton } from "@/components/ui/buttons/LinkButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { contactUrls, siteConfig } from "@/config/site";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    direction: "bottom",
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
      },
      ".cta-label": {
        from: { y: 18, scale: 0.98, opacity: 0 },
        to: {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      },
      ".cta-title-line": {
        from: { yPercent: 115, rotate: 5, opacity: 0 },
        to: {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: "power4.out",
        },
        individual: true,
        staggered: true,
      },
      ".cta-actions": {
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      className="h-screen grid grid-rows-[1fr_auto] items-center overflow-hidden bg-ink text-primary-on-dark-text horizontal-padding"
    >
      <div className="site-size flex flex-col items-center justify-center text-center vertical-padding mx-auto">
        <SectionLabel dark className="cta-label opacity-0">
          ¿Listo para verlo en tu estudio?
        </SectionLabel>
        <h2 className="max-w-5xl font-display text-[16vw] leading-[0.75] tracking-[-.07em] md:text-[10vw]">
          <span className="block overflow-y-clip">
            <span className="cta-title-line block opacity-0">Hablemos</span>
          </span>
          <span className="block overflow-y-clip">
            <span className="cta-title-line block text-paper-deep opacity-0">
              de tu idea
            </span>
          </span>
        </h2>
        <p className="cta-phase mt-10 max-w-lg text-base md:text-xl leading-relaxed text-secondary-on-dark-text opacity-0">
          La demo usa datos e imágenes ficticias.
          <br />
          El producto real se adapta a la identidad, estructura y necesidades.
        </p>
        <div className="cta-actions mt-8 flex flex-wrap justify-center gap-4 opacity-0">
          <WhatsAppButton>Lo quiero para mi estudio</WhatsAppButton>
          <LinkButton
            href={contactUrls.publicWebsite}
            external
            variant="outline"
            text="Ver la experiencia"
          >
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </LinkButton>
        </div>
        <div className="cta-phase mt-20 md:mt-10 font-accent text-base md:text-lg text-secondary-on-dark-text opacity-0">
          <span>desarrollado por </span>
          <Link
            href={siteConfig.creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <RollText
              text="damrod"
              className="font-display uppercase"
              mainClassName="text-primary-on-dark-text"
              hoverClassName="text-secondary-on-dark-text normal-case"
            />
          </Link>
        </div>
      </div>

      <footer className="text-center pb-6 md:pb-8 font-accent text-[0.5rem] md:text-xs uppercase tracking-[0.16em] text-secondary-on-dark-text">
        Ink Demo · Producto adaptable para estudios de tatuajes
      </footer>
    </section>
  );
}
