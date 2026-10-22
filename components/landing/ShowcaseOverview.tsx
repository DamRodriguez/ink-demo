"use client";

import { landingMedia, mediaAlt } from "@/config/media";
import { contactUrls } from "@/config/site";
import { VideoFrame } from "@/components/media/VideoFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/buttons/LinkButton";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function ShowcaseOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollAnimations({
    scope: sectionRef,
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
        scrollTrigger: { start: "top 90%", end: "+=220", scrub: 1.5 },
      },
      ".showcase-cta": {
        from: { scale: 0.86, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
        scrollTrigger: { start: "top 90%", end: "+=180", scrub: 1.2 },
      },
    },
  });

  return (
    <div ref={sectionRef}>
      <div className="showcase-item opacity-0">
        <SectionLabel dark>Dos caras, una experiencia</SectionLabel>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <h2 className="showcase-item second-title opacity-0">
          El producto que
          <br />
          <span className="text-paper-deep">tu estudio merece</span>
        </h2>
        <p className="showcase-item max-w-md text-lg leading-relaxed text-secondary-on-dark-text opacity-0">
          Una presencia pública clara, visual y fácil de recorrer. Con tu
          trabajo, tus artistas y tu manera de recibir consultas.
        </p>
      </div>
      <div className="mt-12 w-full space-y-5">
        <div className="grid gap-5 md:items-stretch md:grid-cols-[1.65fr_0.55fr]">
          <div className="showcase-item aspect-[16/8] opacity-0 md:h-full md:aspect-auto">
            <VideoFrame
              src={landingMedia.websiteDesktopVideo}
              fallbackSrc={landingMedia.websiteOverview}
              alt={mediaAlt.websiteDesktopVideo}
              label="Web pública / escritorio"
              className="h-full w-full"
              sizes="(min-width: 768px) 58vw, 90vw"
            />
          </div>
          <div className="flex flex-col gap-5 md:h-full md:justify-end">
            <div className="showcase-item min-h-0 aspect-[3/4] opacity-0 md:flex-1 md:aspect-auto">
              <VideoFrame
                src={landingMedia.websiteMobileVideo}
                fallbackSrc={landingMedia.websiteMobile}
                alt={mediaAlt.websiteMobileVideo}
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
                text="Ver página"
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
          <div className="showcase-item aspect-[3/4] opacity-0 md:h-full md:aspect-auto">
            <VideoFrame
              src={landingMedia.adminMobileVideo}
              fallbackSrc={landingMedia.adminDashboard}
              alt={mediaAlt.adminMobileVideo}
              label="Administrador / móvil"
              className="h-full w-full"
              sizes="(min-width: 768px) 24vw, 75vw"
            />
          </div>
          <div className="showcase-item aspect-[16/8] opacity-0 md:h-full md:aspect-auto">
            <VideoFrame
              src={landingMedia.adminDesktopVideo}
              fallbackSrc={landingMedia.adminDashboard}
              alt={mediaAlt.adminDesktopVideo}
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
