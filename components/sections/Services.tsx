"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import ServiceCard from "@/components/ServiceCard";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

export default function ServicesSection() {
  return (
    <section className="bg-bg section-pad px-6 md:px-12" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 gap-6 mb-16 md:mb-24 items-end"
        >
          <div className="col-span-12 md:col-span-8">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="eyebrow">Disciplines</span>
              </div>
            </FadeUp>
            <TextReveal as="h2" className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0]">
              Six rooms, one studio.
            </TextReveal>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="body-prose text-base md:text-lg max-w-sm md:ml-auto">
              We take on a small number of clients each quarter, across portrait,
              editorial, brand, and event work. Engagements are quoted by half-day or campaign.
            </p>
          </div>
        </motion.div>

        <div className="border-b border-ink-primary/15">
          {siteConfig.services.map((svc, i) => (
            <ServiceCard key={svc.slug} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
