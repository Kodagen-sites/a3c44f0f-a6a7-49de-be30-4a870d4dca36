import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/motion/FilmGrain";
import Vignette from "@/components/motion/Vignette";
import { siteConfig } from "@/content/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    template: `%s — ${siteConfig.company.name}`,
  },
  description:
    "Lumen & Co Studio is a Los Angeles photography practice working in portrait, editorial, and brand imagery. Considered. Slow. Returned promptly.",
  keywords: [
    "Los Angeles photographer",
    "editorial photography",
    "fashion photography Los Angeles",
    "brand photography",
    "portrait studio LA",
    "wedding photographer LA",
    "commercial photography",
  ],
  openGraph: {
    type: "website",
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description:
      "Photography, considered. A Los Angeles studio working in portrait, editorial, and brand imagery.",
    siteName: siteConfig.company.name,
    locale: siteConfig.seo.locale,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jet.variable}`}>
      <body className="bg-bg text-ink-primary antialiased">
        <FilmGrain />
        <Vignette color="#0E0B08" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
