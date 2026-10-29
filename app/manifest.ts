import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ink Demo | La web de tu estudio, bajo tu control",
    short_name: "Ink Demo",
    description:
      "Una web inmersiva y un administrador privado con acceso seguro para estudios de tatuajes y equipos.",
    start_url: "/",
    display: "standalone",
    background_color: "#141414",
    theme_color: "#141414",
    icons: [
      {
        src: "/images/icons/ink-and-soul-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icons/ink-and-soul-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
