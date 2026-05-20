import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Portrait, editorial, brand, wedding, family, and production services from Lumen & Co Studio in Los Angeles.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const images = assetManifest.images as Record<string, string>;
  return (
    <>
      <PageHero
        eyebrow="Disciplines"
        title={
          <span>
            What we make. <span className="italic font-extralight text-accent">How we charge.</span>
          </span>
        }
        image={images["page-services"]}
        intro="Six service rooms, each with its own rhythm. Engagements are quoted by half-day, full-day, or campaign. Licensing is modular and transparent."
      />

      <section className="bg-bg section-pad px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20 md:space-y-32">
            {siteConfig.services.map((svc, i) => (
              <article
                key={svc.slug}
                id={svc.slug}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-ink-primary/10 pb-20 md:pb-32 last:border-0"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-ink-muted tracking-wider">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">
                    {svc.name}
                  </h2>
                  <p className="body-prose text-base md:text-lg text-ink-body mb-4">
                    {svc.summary}
                  </p>
                  <p className="body-prose text-base text-ink-body/70">
                    {svc.detail}
                  </p>
                  {svc.forWho && (
                    <div className="mt-8 pt-6 border-t border-ink-primary/10">
                      <div className="eyebrow mb-2">For whom</div>
                      <p className="text-sm text-ink-body">{svc.forWho}</p>
                    </div>
                  )}
                </div>
                <div className="md:col-span-5 md:col-start-8">
                  <div className="aspect-[4/5] overflow-hidden bg-bg-accent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={images[`service-${svc.slug.split("-")[0]}`] || images["service-portrait"]}
                      alt={svc.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
