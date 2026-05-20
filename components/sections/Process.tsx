"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

const images = assetManifest.images as Record<string, string>;

/**
 * T15 — Pinned split-scroll. Left image pinned, right column scrolls steps.
 * On mobile, collapses to vertical stack.
 */
export default function Process() {
  return (
    <section className="bg-bg-secondary section-cream section-pad px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-current opacity-50" />
            <span className="eyebrow">{siteConfig.process.eyebrow}</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] max-w-3xl">
            Four steps. <span className="italic font-extralight">No drama.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Pinned image */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 aspect-[3/4] overflow-hidden bg-bg-accent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images["section-mockup"]}
                alt="Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <div className="space-y-12 md:space-y-20">
              {siteConfig.process.steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row gap-6 md:gap-10"
                >
                  <span className="font-display text-5xl md:text-6xl font-extralight italic text-current/30 md:w-20 flex-shrink-0">
                    {step.n}
                  </span>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-2xl md:text-3xl font-medium mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="body-prose text-base md:text-lg max-w-lg">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
