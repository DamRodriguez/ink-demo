import "@/styles/globals.css";
import "@videojs/react/video/skin.css";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const fontBase = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const fontAccent = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fontBase.variable} ${fontAccent.variable}`}>
      <body className="font-base antialiased overflow-x-clip">
        <SmoothScrollProvider>
          <ScrollToTop />
          <SeoSchema />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
