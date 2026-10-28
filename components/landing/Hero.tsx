"use client";

import { DemoImage } from "@/components/media/DemoImage";
import { MediaOverlay } from "@/components/media/MediaOverlay";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

const HERO_MEDIA = {
  primary: {
    src: "/images/sections/hero/web.webp",
    alt: "Vista de la web pública de un estudio de tatuajes",
  },
  secondary: {
    src: "/images/sections/hero/admin.webp",
    alt: "Vista del administrador privado de la web pública de un estudio de tatuajes",
  },
} as const;

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
      ".hero-label": {
        disableScrollTrigger: true,
        from: { y: 18, scale: 0.98, opacity: 0 },
        to: {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.05,
          ease: "power3.out",
        },
      },
      ".hero-cta": {
        disableScrollTrigger: true,
        from: { y: 18, scale: 0.98, opacity: 0 },
        to: {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
        },
      },
      ".hero-title-line": {
        individual: true,
        staggered: true,
        disableScrollTrigger: true,
        from: { yPercent: 115, rotate: 5, opacity: 0 },
        to: {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        },
      },
      ".hero-media": {
        individual: true,
        staggered: true,
        disableScrollTrigger: true,
        from: { scale: 1.15, opacity: 0 },
        to: {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          delay: 0.3,
          stagger: 0.3,
          ease: "power3.out",
        },
      },
    },
  });

  return (
    <section ref={sectionRef} className="relative flex h-lvh flex-col bg-ink">
      <div className="site-size horizontal-padding flex min-h-0 flex-1 flex-col justify-center overflow-hidden py-6 sm:py-10 md:py-8 lg:py-16">
        <SectionLabel dark className="hero-label opacity-0">
          Producto digital para estudios de tatuajes
        </SectionLabel>
        <div className="grid min-h-0 items-center gap-10 md:gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12 xl:grid-cols-[0.8fr_1.2fr] xl:gap-x-30 xl:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.74] tracking-[-.07em] text-primary-on-dark-text">
              <span className="block overflow-y-clip">
                <span className="hero-title-line block opacity-0">
                  Tu estudio
                </span>
              </span>
              <span className="ml-[12%] block overflow-y-clip text-paper-deep">
                <span className="hero-title-line block opacity-0">
                  bajo control.
                </span>
              </span>
            </h1>
            <p className="hero-reveal ml-[12%] mt-4 max-w-[16rem] sm:max-w-[29rem] text-base md:text-xl leading-[1.35] text-secondary-on-dark-text opacity-0 sm:mt-6 sm:leading-relaxed ">
              Una web con identidad propia, animaciones únicas y el control para
              actualizarla cuando quieras
            </p>
          </div>
          <div className="relative min-h-0 min-w-0 w-full aspect-[16/9] md:mt-4 md:aspect-[3/1] md:h-auto lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:aspect-[4/5] lg:max-h-[34rem]">
            <div className="hero-media absolute left-0 top-[3%] z-10 aspect-[16/9] w-[56%] -rotate-[2deg] overflow-hidden bg-muted-ink/20 opacity-0 shadow-2xl lg:top-[18%] lg:-rotate-[4deg] border border-soft-white/5">
              <DemoImage
                src={HERO_MEDIA.primary.src}
                alt={HERO_MEDIA.primary.alt}
                priority
                sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 32vw, 70vw"
              />
              <MediaOverlay label="Web pública" position="top-right" />
            </div>
            <div className="hero-media absolute right-0 top-[42%] z-20 aspect-[16/9] w-[56%] rotate-[1deg] overflow-hidden bg-muted-ink/20 opacity-0 shadow-2xl md:top-[18%] lg:top-[34%] border border-soft-white/5">
              <DemoImage
                src={HERO_MEDIA.secondary.src}
                alt={HERO_MEDIA.secondary.alt}
                sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 32vw, 70vw"
              />
              <MediaOverlay
                label="Administrador privado"
                position="top-right"
              />
            </div>
          </div>
          <div className="hero-cta sm:ml-[12%] mt-4 opacity-0 md:mt-8 lg:col-start-1 lg:row-start-2">
            <WhatsAppButton>Quiero mi propia experiencia</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
