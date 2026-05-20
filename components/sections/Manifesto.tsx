"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/content/site-config";

/**
 * T7 — Oversized type statement.
 * Big mid-page manifesto word + body. Sits between content blocks as a breather.
 */
export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={ref} className="bg-bg section-pad relative overflow-hidden">
      {/* Faint parallax background word */}
      <motion.div
        style={{ y }}
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="font-display font-light text-[40vw] md:text-[28vw] leading-none text-accent/[0.06] tracking-tight whitespace-nowrap">
          {siteConfig.manifesto.word}
        </span>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="eyebrow">A manifesto</span>
          </div>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] max-w-4xl">
            <span className="italic font-extralight text-accent">—</span>{" "}
            {siteConfig.manifesto.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
