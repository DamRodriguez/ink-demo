import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

type CreateMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
}: CreateMetadataProps = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords],
    authors: [
      {
        name: siteConfig.creator.name,
        url: siteConfig.creator.url,
      },
    ],
    creator: siteConfig.creator.name,
    publisher: siteConfig.name,
    applicationName: siteConfig.name,
    category: siteConfig.category,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: "/images/icons/ink-and-soul-192.png", sizes: "192x192" },
        { url: "/images/icons/ink-and-soul-512.png", sizes: "512x512" },
      ],
      shortcut: "/images/icons/ink-and-soul-192.png",
      apple: "/images/icons/ink-and-soul-192.png",
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: title ?? siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      ...(siteConfig.twitterHandle
        ? {
            creator: siteConfig.twitterHandle,
            site: siteConfig.twitterHandle,
          }
        : {}),
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
