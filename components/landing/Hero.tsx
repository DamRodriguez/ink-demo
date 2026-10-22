"use client";

import { DemoImage } from "@/components/media/DemoImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { landingMedia, mediaAlt } from "@/config/media";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

const HERO_MEDIA = landingMedia.hero;
const HERO_MEDIA_SECONDARY = landingMedia.websiteOverview;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    animations: {
      ".hero-reveal": {
        individual: true,
        disableScrollTrigger: true,
        from: { yPercent: 110, opacity: 0, rotate: 4 },
        to: {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
        },
      },
      ".hero-media": {
        disableScrollTrigger: true,
        from: { scale: 1.15, opacity: 0 },
        to: {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          delay: 0.35,
          ease: "power3.out",
        },
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-svh min-h-svh flex-col bg-ink"
    >
      <div className="site-size horizontal-padding flex min-h-0 flex-1 flex-col justify-center overflow-hidden py-6 sm:py-10 md:py-8 lg:py-16">
        <p className="hero-reveal mb-3 font-accent text-[0.55rem] uppercase tracking-[0.14em] text-secondary-on-dark-text opacity-0 sm:mb-6 sm:text-[0.65rem] sm:tracking-[0.18em]">
          Producto digital para estudios de tatuajes
        </p>
        <div className="grid min-h-0 items-center gap-10 md:gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12 xl:grid-cols-[0.8fr_1.2fr] xl:gap-30">
          <div>
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.72] tracking-[-.07em] text-primary-on-dark-text">
              <span className="hero-reveal block opacity-0">Tu estudio</span>
              <span className="hero-reveal ml-[12%] block text-paper-deep opacity-0">
                bajo control.
              </span>
            </h1>
            <p className="hero-reveal mt-3 max-w-md text-base sm:text-lg md:text-xl leading-[1.35] text-secondary-on-dark-text opacity-0 sm:mt-6 sm:leading-relaxed ">
              Una experiencia digital con identidad propia.
              <br />
              Tu equipo la actualiza sin depender del código.
            </p>
            <div className="hero-reveal mt-4 opacity-0 sm:mt-6">
              <WhatsAppButton>Adaptémoslo a tu estudio</WhatsAppButton>
            </div>
          </div>
          <div className="hero-media relative min-h-0 min-w-0 w-full h-[38svh] opacity-0 md:aspect-[2/1] md:h-auto lg:aspect-[4/5] lg:max-h-[34rem]">
            <div className="absolute left-0 top-[3%] z-10 aspect-[16/10] w-[70%] -rotate-[2deg] overflow-hidden bg-muted-ink/20 shadow-2xl md:w-[46%] lg:left-[2%] lg:top-[18%] lg:w-[54%] lg:-rotate-[4deg] xl:left-[4%] xl:w-[46%]">
              <DemoImage
                src={HERO_MEDIA}
                alt={mediaAlt.hero}
                priority
                sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 32vw, 70vw"
              />
              <div className="pointer-events-none absolute inset-x-0 -top-2 z-10 h-2/3 bg-gradient-to-b from-ink/90 via-ink/40 to-transparent" />
              <span className="absolute right-2 top-2 md:right-4 md:top-4 z-20 text-right font-accent text-[0.6rem] uppercase tracking-[0.16em] text-soft-white/70">
                Web pública
              </span>
            </div>
            <div className="absolute left-[20%] top-[42%] z-20 aspect-[16/10] w-[70%] rotate-[1deg] overflow-hidden bg-muted-ink/20 shadow-2xl md:left-[32%] md:top-[18%] md:w-[46%] lg:left-[38%] lg:top-[34%] lg:w-[54%] xl:left-[42%] xl:w-[46%]">
              <DemoImage
                src={HERO_MEDIA_SECONDARY}
                alt={mediaAlt.websiteOverview}
                sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 32vw, 70vw"
              />
              <div className="pointer-events-none absolute inset-x-0 -top-2 z-10 h-2/3 bg-gradient-to-b from-ink/90 via-ink/40 to-transparent" />
              <span className="absolute right-2 top-2 md:right-4 md:top-4 z-20 text-right font-accent text-[0.6rem] uppercase tracking-[0.16em] text-soft-white/70">
                Administrador privado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
