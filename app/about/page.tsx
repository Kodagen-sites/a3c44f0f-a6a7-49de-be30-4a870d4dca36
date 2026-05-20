import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lumen & Co Studio was founded in 2019 by Aria Park and Théo Rivera. We make photography in the Arts District of Los Angeles.",
  alternates: { canonical: "/about" },
};

/**
 * AB3 — Founder Portrait + Timeline.
 * Image-led panel, founder portrait at left, body + timeline on right.
 */
export default function AboutPage() {
  const images = assetManifest.images as Record<string, string>;
  return (
    <>
      <PageHero
        eyebrow={siteConfig.about.eyebrow}
        title={
          <span>
            A small studio. <span className="italic font-extralight text-accent">A long memory.</span>
          </span>
        }
        image={images["page-about"]}
        intro={siteConfig.about.title}
      />

      <section className="bg-bg section-pad px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Founder portrait */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-bg-accent">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images["founders"]}
                  alt="Aria Park & Théo Rivera"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-6 h-px bg-accent" />
                <span className="eyebrow">Aria Park & Théo Rivera, partners</span>
              </div>
            </div>

            {/* Body + timeline */}
            <div className="lg:col-span-7">
              <div className="space-y-6 max-w-2xl">
                {siteConfig.about.body.map((p, i) => (
                  <p key={i} className="body-prose text-lg md:text-xl text-ink-body leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-16 md:mt-20 border-t border-ink-primary/15 pt-12">
                <div className="eyebrow mb-10">Timeline</div>
                <ol className="space-y-10">
                  {siteConfig.about.timeline.map((t) => (
                    <li key={t.year} className="grid grid-cols-1 md:grid-cols-6 gap-6">
                      <span className="font-display text-3xl md:text-4xl font-extralight italic text-accent md:col-span-1">
                        {t.year}
                      </span>
                      <p className="md:col-span-5 body-prose text-base md:text-lg pt-3 max-w-xl">
                        {t.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
