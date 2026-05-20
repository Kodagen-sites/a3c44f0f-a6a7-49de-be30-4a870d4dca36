import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing your use of ${siteConfig.company.name}.`,
  alternates: { canonical: "/terms" },
};

const company = siteConfig.company.name;
const email = siteConfig.contact.email;
const jurisdiction = `${siteConfig.contact.address.region}, ${siteConfig.contact.address.country}`;
const effectiveDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function TermsPage() {
  return (
    <article className="bg-bg pt-32 md:pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow mb-6">Legal · Effective {effectiveDate}</div>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-12">
          Terms of <span className="italic font-extralight text-accent">Service</span>
        </h1>

        <div className="space-y-8 body-prose text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">1. Acceptance</h2>
            <p>By using this website, you agree to these terms. {company} reserves the right to update these terms; continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">2. Engagement scope</h2>
            <p>Photography work is governed by a separate contract signed at the start of each engagement. The contract sets out the scope, deliverables, licensing terms, and fees. These site terms do not replace that contract.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">3. Copyright</h2>
            <p>All imagery on this site is © {company} unless otherwise credited. Reproduction without written consent is prohibited. Licensing inquiries: <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">4. Liability</h2>
            <p>We make no warranties about the availability or content of this site. {company} is not liable for indirect, incidental, or consequential damages arising from use of this site.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">5. Governing law</h2>
            <p>These terms are governed by the laws of {jurisdiction}. Disputes will be resolved in the courts of that jurisdiction.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">6. Contact</h2>
            <p>Questions: <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
