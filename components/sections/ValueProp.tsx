"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/content/site-config";

export default function ValueProp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="section-cream bg-bg-secondary section-pad px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="flex items-center gap-3 mb-12 md:mb-16"
        >
          <span className="w-8 h-px bg-current opacity-50" />
          <span className="eyebrow">{siteConfig.valueProp.eyebrow}</span>
        </motion.div>

        <h2 className="display-hero font-light text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-5xl">
          {siteConfig.valueProp.statement.split(". ").map((sentence, i, arr) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ delay: 0.2 + i * 0.18, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {i === 0 && <span className="italic font-extralight text-current/60 mr-3">—</span>}
                {sentence}{i < arr.length - 1 ? "." : ""}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
