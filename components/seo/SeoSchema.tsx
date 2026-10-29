import { contactUrls, siteConfig } from "@/config/site";

export function SeoSchema() {
  const logo = new URL(siteConfig.logo, siteConfig.url).toString();
  const image = new URL(siteConfig.ogImage, siteConfig.url).toString();
  const siteUrl = new URL(siteConfig.url).toString();
  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo,
    image,
    description: siteConfig.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.whatsappLabel,
        url: contactUrls.whatsapp,
      },
    ],
  };

  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}#software`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    audience: {
      "@type": "Audience",
      audienceType:
        "Tatuadores independientes, estudios de tatuajes y equipos de trabajo",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: contactUrls.whatsapp,
    },
    image,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}#organization` },
    inLanguage: siteConfig.locale,
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${siteConfig.url}#webpage`,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}#website` },
    about: { "@id": `${siteConfig.url}#software` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [organization, softwareApplication, website, webpage],
        }),
      }}
    />
  );
}
