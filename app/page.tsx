import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import ServicesSection from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Manifesto from "@/components/sections/Manifesto";
import Process from "@/components/sections/Process";
import Cta from "@/components/sections/Cta";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} — Photography, considered.`,
  description:
    "A Los Angeles photography studio working in portrait, editorial, brand, and event imagery. Considered. Slow. Returned promptly.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProp />
      <ServicesSection />
      <Showcase />
      <Manifesto />
      <Process />
      <Cta />
    </>
  );
}
