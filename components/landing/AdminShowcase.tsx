"use client";
import { AdminFeatureBlock } from "@/components/landing/AdminFeatureBlock";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ADMIN_FEATURES } from "@/data/adminShowcase";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

export function AdminShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaAnimation = {
    from: { y: 70, opacity: 0 },
    to: {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.18,
      ease: "power3.out",
    },
    individual: true,
    staggered: true,
  } as const;

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
      ".showcase-media-services": mediaAnimation,
      ".showcase-media-team": mediaAnimation,
      ".showcase-media-works": mediaAnimation,
      ".showcase-media-settings": mediaAnimation,
      ".admin-title-line": {
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
    <div id="administrador" ref={sectionRef}>
      <div className="showcase-item opacity-0">
        <SectionLabel dark>El administrador</SectionLabel>
      </div>
      <div className="grid gap-y-6 gap-x-24 lg:grid-cols-2 lg:items-end">
        <h2 className="showcase-item second-title">
          <span className="block overflow-y-clip">
            <span className="admin-title-line block opacity-0">
              Tu contenido
            </span>
          </span>
          <span className="block overflow-y-clip">
            <span className="admin-title-line block text-paper-deep opacity-0">
              en movimiento
            </span>
          </span>
        </h2>
        <p className="showcase-item max-w-xl text-base md:text-xl leading-relaxed text-secondary-on-dark-text">
          El administrador{" "}
          <span className="text-primary-on-dark-text/90">
            gestiona la información
          </span>{" "}
          detrás de escena para que cada cambio llegue a la web pública de
          manera inmediata
        </p>
      </div>
      <div className="common-section-space space-y-24 md:space-y-26">
        {ADMIN_FEATURES.map((feature) => (
          <AdminFeatureBlock key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}
