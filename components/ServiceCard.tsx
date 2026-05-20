"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * CV2 — Oversized Number Minimal.
 * Picked for S6 Fashion Editorial / V2 voice.
 * Each card leads with a giant numeral, then service name + summary.
 */
type Service = {
  slug: string;
  name: string;
  summary: string;
  forWho?: string;
};

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link href={`/services#${service.slug}`} className="block py-10 md:py-14 border-t border-ink-primary/15">
        <div className="grid grid-cols-12 gap-6 items-baseline">
          {/* Giant numeral */}
          <div className="col-span-2 md:col-span-1 font-mono text-xs text-ink-muted tracking-wider">
            0{index + 1}
          </div>

          {/* Service name + summary */}
          <div className="col-span-10 md:col-span-7">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-3 group-hover:text-accent transition-colors duration-500">
              {service.name}
            </h3>
            <p className="body-prose text-sm md:text-base text-ink-body max-w-xl">
              {service.summary}
            </p>
          </div>

          {/* Right column — "for who" */}
          <div className="hidden md:block md:col-span-3 text-right">
            {service.forWho && (
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted leading-relaxed">
                {service.forWho}
              </p>
            )}
          </div>

          {/* CTA arrow */}
          <div className="col-span-12 md:col-span-1 flex md:justify-end mt-4 md:mt-0">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink-primary/20 group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all duration-500">
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
