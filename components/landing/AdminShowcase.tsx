"use client";

import { AdminFeatureBlock } from "@/components/landing/AdminFeatureBlock";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { landingMedia, mediaAlt } from "@/config/media";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

const ADMIN_FEATURES = [
  {
    number: "01",
    title: "Servicios",
    description:
      "Creá, editá, ordená o quitá servicios desde el administrador y reflejá cada cambio en la web pública.",
    media: [
      {
        src: landingMedia.adminServicesList,
        alt: mediaAlt.adminServicesList,
        label: "Listado de servicios",
      },
      {
        src: landingMedia.adminServicesEditor,
        alt: mediaAlt.adminServicesEditor,
        label: "Crear y editar",
      },
      {
        src: landingMedia.websiteServices,
        alt: mediaAlt.websiteServices,
        label: "Resultado en la web",
      },
    ],
  },
  {
    number: "02",
    title: "Equipo",
    description:
      "Presentá a cada artista con su identidad, especialidades y trabajos para que el público conozca quién está detrás del estudio.",
    media: [
      {
        src: landingMedia.adminTeamList,
        alt: mediaAlt.adminTeamList,
        label: "Miembros del equipo",
      },
      {
        src: landingMedia.adminTeamEditor,
        alt: mediaAlt.adminTeamEditor,
        label: "Crear y editar",
      },
      {
        src: landingMedia.websiteTeam,
        alt: mediaAlt.websiteTeam,
        label: "Resultado en la web",
      },
    ],
  },
  {
    number: "03",
    title: "Trabajos",
    description:
      "Administrá tu portfolio, asociá cada trabajo con un artista y mostrale a cada visitante lo que tu estudio sabe hacer.",
    media: [
      {
        src: landingMedia.adminWorksList,
        alt: mediaAlt.adminWorksList,
        label: "Listado de trabajos",
      },
      {
        src: landingMedia.adminWorksEditor,
        alt: mediaAlt.adminWorksEditor,
        label: "Crear y editar",
      },
      {
        src: landingMedia.websiteWorks,
        alt: mediaAlt.websiteWorks,
        label: "Resultado en la web",
      },
    ],
  },
] as const;

const ADMIN_SETTINGS_MEDIA = [
  {
    src: landingMedia.adminSettings,
    alt: mediaAlt.adminSettings,
    label: "Información del estudio",
  },
  {
    src: landingMedia.adminContactSettings,
    alt: mediaAlt.adminContactSettings,
    label: "Contacto y horarios",
  },
  {
    src: landingMedia.adminLocationSettings,
    alt: mediaAlt.adminLocationSettings,
    label: "Ubicación",
  },
] as const;

export function AdminShowcase() {
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
      ".showcase-media": {
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
        scrollTrigger: { start: "top 90%", end: "+=420", scrub: 1.5 },
      },
    },
  });

  return (
    <div id="administrador" ref={sectionRef}>
      <div className="showcase-item opacity-0">
        <SectionLabel dark>El administrador asd</SectionLabel>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="showcase-item second-title opacity-0">
          Tu contenido
          <br />
          <span className="text-paper-deep">en movimiento</span>
        </h2>
        <p className="showcase-item max-w-xl text-lg leading-relaxed text-secondary-on-dark-text opacity-0 lg:justify-self-end">
          El administrador ordena el trabajo detrás de escena para que cada
          cambio llegue a la web pública con claridad.
        </p>
      </div>
      <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
        {ADMIN_FEATURES.map((feature) => (
          <AdminFeatureBlock key={feature.number} {...feature} />
        ))}
        <article className="showcase-item pt-8 opacity-0">
          <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <span className="font-accent text-xs text-secondary-on-dark-text">
                04
              </span>
              <h3 className="mt-4 font-display text-4xl leading-[0.85] md:text-5xl">
                Configuración
              </h3>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-secondary-on-dark-text md:text-lg">
              Actualizá la información personal, los canales de contacto, la
              ubicación y los horarios desde un solo lugar.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {ADMIN_SETTINGS_MEDIA.map((item) => (
              <div
                key={item.label}
                className="showcase-media aspect-[4/3] opacity-0"
              >
                <MediaFrame
                  src={item.src}
                  alt={item.alt}
                  label={item.label}
                  className="h-full w-full"
                  sizes="(min-width: 768px) 30vw, 90vw"
                />
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
