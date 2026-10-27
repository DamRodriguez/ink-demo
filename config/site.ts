export const siteConfig = {
  name: "Ink Demo",
  title: "Ink Demo | La web de tu estudio, bajo tu control",
  description:
    "Una web editorial y un administrador pensado para estudios de tatuajes, tatuadores independientes y equipos.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ink-demo.vercel.app",
  ogImage: "/images/icons/ink-and-soul.png",
  locale: "es_AR",
  creator: {
    name: "Damian Rodriguez",
    url: "https://damrod.dev/",
  },
  keywords: [
    "web para estudios de tatuajes",
    "administrador para estudios de tatuajes",
    "portfolio para tatuadores",
    "web para tatuadores",
    "gestión de contenido para estudios",
    "landing para estudios de tatuajes",
  ],
  publicWebsiteUrl: "https://1nk-and-soul.vercel.app",
  whatsappNumber: "5491159641031",
  whatsappLabel: "+54 9 11 5964-1031",
  email: "",
} as const;

export const contactUrls = {
  whatsapp: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hola! Quiero conocer Ink Demo.",
  )}`,
  publicWebsite: siteConfig.publicWebsiteUrl,
} as const;
