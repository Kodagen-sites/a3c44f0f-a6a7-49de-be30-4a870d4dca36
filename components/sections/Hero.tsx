"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrollHint from "@/components/motion/ScrollHint";
import assetManifest from "@/content/asset-manifest.json";

/**
 * Hero — Archetype G premium tier (T1 8s Veo loop background).
 * Hero text pattern H6 (multi-weight serif mix).
 * Hero overlay HO5 (big-stack, bottom-anchored left, owns top-left + bottom-left).
 * Hero entrance E2 (word-split rise on load).
 */
export default function Hero() {
  const h1Lines = siteConfig.hero.h1;
  const heroVideo = (assetManifest.videos as Record<string, string>)["scene-1"];
  const heroPoster = (assetManifest.images as Record<string, string>)["hero-start"];

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-bg">
      {/* Video / image background */}
      <div className="absolute inset-0">
        {heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroPoster}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Scrim — bottom heavy for H6 typography on bottom-left */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />
      </div>

      {/* Top-left eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute top-32 md:top-36 left-6 md:left-12"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-accent/80" />
          <span className="eyebrow">{siteConfig.hero.eyebrow}</span>
        </div>
      </motion.div>

      {/* Bottom-left H1 stack (H6 pattern) */}
      <div className="relative h-full flex items-end pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-5xl">
          <h1 className="display-hero text-[14vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[9rem] leading-[0.92]">
            {h1Lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.18,
                    duration: 1.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`block ${line.style === "italic" ? "italic font-light text-ink-primary/95" : "font-medium text-accent"}`}
                  style={{ fontWeight: line.weight }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.9 }}
            className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-ink-body leading-relaxed"
          >
            {siteConfig.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.9 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-3"
          >
            <MagneticButton
              as="a"
              href={siteConfig.hero.primaryCta.href}
              className="group inline-flex items-center gap-2 bg-accent text-bg px-7 py-4 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition-colors"
            >
              <span>{siteConfig.hero.primaryCta.label}</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
            <a
              href={siteConfig.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium tracking-wide uppercase text-ink-primary border border-ink-primary/30 hover:border-accent hover:text-accent transition-colors"
            >
              <span>{siteConfig.hero.secondaryCta.label}</span>
            </a>
          </motion.div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
