import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a conversation with Lumen & Co Studio. We take on a limited number of engagements each quarter.",
  alternates: { canonical: "/contact" },
};

/**
 * CT4 — Split photo + form. Left photo, right form, dense visual contrast.
 */
export default function ContactPage() {
  const images = assetManifest.images as Record<string, string>;
  return (
    <>
      <PageHero
        eyebrow="Begin a conversation"
        title={
          <span>
            Tell us about <span className="italic font-extralight text-accent">the picture.</span>
          </span>
        }
        image={images["page-contact"]}
        intro="The more you can describe — the brief, the subject, the room, the timing — the better the first reply."
      />

      <section className="bg-bg section-pad px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left photo column */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="aspect-[4/5] overflow-hidden bg-bg-accent">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images["page-contact"]}
                    alt="The studio"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="eyebrow mb-3">Studio</div>
                  <address className="not-italic body-prose text-base md:text-lg">
                    <div>{siteConfig.contact.address.line1}</div>
                    <div>
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.region}{" "}
                      {siteConfig.contact.address.postal}
                    </div>
                  </address>
                </div>

                <div className="space-y-3 body-prose text-base">
                  <div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                  <div className="text-ink-muted text-sm pt-2">
                    {siteConfig.contact.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
