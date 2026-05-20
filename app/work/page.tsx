import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent work from Lumen & Co Studio — editorial, brand, portrait, and event photography produced in Los Angeles.",
  alternates: { canonical: "/work" },
};

/**
 * WK1 — Masonry Grid Editorial.
 * Asymmetric grid with varied aspect ratios; hover reveals title + category.
 */
export default function WorkPage() {
  const images = assetManifest.images as Record<string, string>;
  const items = siteConfig.work;

  // Custom span pattern for editorial masonry (1-indexed)
  const sizes = [
    "md:col-span-7 md:row-span-2 aspect-[4/5]",
    "md:col-span-5 aspect-[4/3]",
    "md:col-span-5 aspect-[4/5]",
    "md:col-span-6 aspect-[3/4]",
    "md:col-span-6 aspect-[4/3]",
    "md:col-span-4 aspect-[3/4]",
    "md:col-span-4 aspect-[1/1]",
    "md:col-span-4 aspect-[3/4]",
  ];

  return (
    <>
      <PageHero
        eyebrow="Recent work — 2023 to 2025"
        title={
          <span>
            The archive, <span className="italic font-extralight text-accent">in light.</span>
          </span>
        }
        image={images["page-work"]}
        intro="A selection from the last two years of commercial, editorial, and private commissions."
      />

      <section className="bg-bg section-pad px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {items.map((work, i) => (
              <a
                key={work.slug}
                href={`#${work.slug}`}
                className={`group relative col-span-12 ${sizes[i] || "md:col-span-4 aspect-[4/5]"} overflow-hidden bg-bg-accent`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[`work-${i + 1}`]}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="eyebrow mb-2">
                    {work.category} · {work.year}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-ink-primary leading-tight">
                    {work.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 md:mt-32 text-center max-w-2xl mx-auto">
            <p className="body-prose text-base md:text-lg text-ink-body">
              We license individual images from the archive on transparent usage tiers.
              Editors and brand teams welcome to inquire.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium tracking-wide uppercase text-ink-primary border border-ink-primary/30 hover:border-accent hover:text-accent transition-colors"
              >
                Request licensing
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
