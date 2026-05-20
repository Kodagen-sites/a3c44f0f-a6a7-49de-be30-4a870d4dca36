"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

const images = assetManifest.images as Record<string, string>;

/**
 * T5 — Image mosaic reveal. Editorial masonry layout with hover lift.
 */
export default function Showcase() {
  const works = siteConfig.work.slice(0, 6);
  // Match each work item to a work-N image
  const heights = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]"];

  return (
    <section className="bg-bg-tertiary section-pad px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end"
        >
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="eyebrow">Recent work</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
              The room, <span className="italic font-extralight text-accent">not</span> just the schedule.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase text-ink-body hover:text-accent transition-colors"
            >
              <span>See the full archive</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {works.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${heights[i]} overflow-hidden bg-bg-accent ${i === 0 ? "md:col-span-2 md:row-span-1 aspect-[3/2]" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[`work-${i + 1}`]}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end">
                <span className="eyebrow mb-2">{work.category} · {work.year}</span>
                <h3 className="font-display text-xl md:text-2xl text-ink-primary leading-tight">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
