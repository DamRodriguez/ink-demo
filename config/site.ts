const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://1nk-demo.vercel.app";
const logoPath = "/images/logo/ink-and-soul-full.webp";
const logoUrl = `${siteUrl}${logoPath}`;

export const siteConfig = {
  name: "Ink Demo",
  title: "Ink Demo | Una experiencia digital para tu estudio",
  description:
    "Una web inmersiva y un administrador privado para estudios de tatuajes, artistas independientes y equipos.",
  url: siteUrl,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || "https://1nk-demo.vercel.app"}/images/logo/ink-and-soul-full.webp`,
  logo: logoUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  locale: "es_AR",
  category: "Producto digital para estudios de tatuajes",
  twitterHandle: "",
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
    "administrador privado para estudios",
    "autenticación segura para equipos",
    "web adaptable para estudios de tatuajes",
  ],
  publicWebsiteUrl: "https://1nk-and-soul.vercel.app/",
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
