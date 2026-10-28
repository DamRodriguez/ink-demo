"use client";

import { VideoFrame } from "@/components/media/VideoFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/buttons/LinkButton";
import { contactUrls } from "@/config/site";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const SHOWCASE_MEDIA = {
  websiteDesktop: {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    fallbackSrc: "/images/sections/showcase/overview/web-desktop.png",
    alt: "Recorrido en video por la web pública en escritorio",
  },
  websiteMobile: {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    fallbackSrc: "/images/sections/showcase/overview/web-mobile.png",
    alt: "Recorrido en video por la web pública en móvil",
  },
  adminMobile: {
    src: "/videos/sections/showcase/overview/admin-mobile.mp4",
    fallbackSrc: "/images/sections/showcase/overview/admin-mobile.png",
    alt: "Recorrido del administrador de Ink & Soul en móvil",
  },
  adminDesktop: {
    src: "/videos/sections/showcase/overview/admin-desktop.mp4",
    fallbackSrc: "/images/sections/showcase/overview/admin-desktop.png",
    alt: "Recorrido del administrador de Ink & Soul en escritorio",
  },
} as const;

export function ShowcaseOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    direction: "bottom",
    animations: {
      ".showcase-item": {
        from: { y: 70, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.16,
          ease: "power3.out",
        },
        individual: true,
      },
      ".showcase-cta": {
        from: { scale: 0.86, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
      },
      ".showcase-title-line": {
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
      },
    },
  });

  return (
    <div ref={sectionRef}>
      <div className="showcase-item opacity-0">
        <SectionLabel dark>Dos caras, una experiencia</SectionLabel>
      </div>
      <div className="grid gap-y-6 gap-x-24 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <h2 className="showcase-item second-title">
          <span className="block overflow-y-clip">
            <span className="showcase-title-line block opacity-0">
              El producto que
            </span>
          </span>
          <span className="block overflow-y-clip">
            <span className="showcase-title-line block text-paper-deep opacity-0">
              tu estudio merece
            </span>
          </span>
        </h2>
        <p className="showcase-item max-w-md text-base md:text-xl leading-relaxed text-secondary-on-dark-text">
          Una{" "}
          <span className="text-primary-on-dark-text/90">
            presencia pública clara
          </span>
          , visual y fácil de recorrer. Con tu trabajo, tus artistas y tu manera
          de recibir consultas.
        </p>
      </div>
      <div className="mt-10 md:mt-15 w-full space-y-5">
        <div className="grid gap-5 md:items-stretch md:grid-cols-[1.65fr_0.55fr]">
          <div className="showcase-item aspect-[16/9] md:self-start">
            <VideoFrame
              src={SHOWCASE_MEDIA.websiteDesktop.src}
              fallbackSrc={SHOWCASE_MEDIA.websiteDesktop.fallbackSrc}
              alt={SHOWCASE_MEDIA.websiteDesktop.alt}
              label="Web pública / escritorio"
              className="h-full w-full"
              sizes="(min-width: 768px) 58vw, 90vw"
            />
          </div>
          <div className="flex flex-col gap-5 md:h-full md:justify-end">
            <div className="showcase-item aspect-[3/4] md:flex-1 md:aspect-auto">
              <VideoFrame
                src={SHOWCASE_MEDIA.websiteMobile.src}
                fallbackSrc={SHOWCASE_MEDIA.websiteMobile.fallbackSrc}
                alt={SHOWCASE_MEDIA.websiteMobile.alt}
                label="Web pública / móvil"
                className="h-full w-full"
                sizes="(min-width: 768px) 24vw, 75vw"
              />
            </div>
            <div className="showcase-cta opacity-0">
              <LinkButton
                href={contactUrls.publicWebsite}
                external
                full
                variant="light"
                text="Ver sitio web"
              >
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:items-stretch md:grid-cols-[0.55fr_1.65fr]">
          <div className="showcase-item aspect-[2/3] md:h-full md:aspect-auto">
            <VideoFrame
              src={SHOWCASE_MEDIA.adminMobile.src}
              fallbackSrc={SHOWCASE_MEDIA.adminMobile.fallbackSrc}
              alt={SHOWCASE_MEDIA.adminMobile.alt}
              label="Administrador / móvil"
              className="h-full w-full"
              sizes="(min-width: 768px) 24vw, 75vw"
            />
          </div>
          <div className="showcase-item aspect-[16/9] md:self-start">
            <VideoFrame
              src={SHOWCASE_MEDIA.adminDesktop.src}
              fallbackSrc={SHOWCASE_MEDIA.adminDesktop.fallbackSrc}
              alt={SHOWCASE_MEDIA.adminDesktop.alt}
              label="Administrador / escritorio"
              className="h-full w-full"
              sizes="(min-width: 768px) 58vw, 90vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
