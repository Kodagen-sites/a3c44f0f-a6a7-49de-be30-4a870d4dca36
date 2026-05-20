"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import MagneticButton from "@/components/motion/MagneticButton";
import assetManifest from "@/content/asset-manifest.json";

/**
 * CTA3 — Full-bleed image + overlay.
 * Bold conversion moment with hero-quality media + magnetic CTA.
 */
export default function Cta() {
  const images = assetManifest.images as Record<string, string>;
  return (
    <section className="relative min-h-[80vh] flex items-center bg-bg-tertiary overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images["cta-bg"]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="eyebrow">{siteConfig.cta.eyebrow}</span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-4xl mb-8">
            Let&apos;s make pictures <br />
            <span className="italic font-extralight text-accent">that mean something.</span>
          </h2>

          <p className="body-prose text-lg md:text-xl max-w-xl mb-10">
            {siteConfig.cta.body}
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton
              as="a"
              href={siteConfig.cta.primary.href}
              className="group inline-flex items-center gap-2 bg-accent text-bg px-8 py-5 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition-colors"
            >
              <span>{siteConfig.cta.primary.label}</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
            <a
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-5 text-sm font-medium tracking-wide uppercase text-ink-primary border border-ink-primary/40 hover:border-accent hover:text-accent transition-colors"
            >
              <span>See the archive</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
