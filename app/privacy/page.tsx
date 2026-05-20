import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.company.name} collects and uses information.`,
  alternates: { canonical: "/privacy" },
};

const company = siteConfig.company.name;
const email = siteConfig.contact.email;
const jurisdiction = `${siteConfig.contact.address.city}, ${siteConfig.contact.address.region}, ${siteConfig.contact.address.country}`;
const effectiveDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function PrivacyPage() {
  return (
    <article className="bg-bg pt-32 md:pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow mb-6">Legal · Effective {effectiveDate}</div>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-12">
          Privacy <span className="italic font-extralight text-accent">Policy</span>
        </h1>

        <div className="space-y-8 body-prose text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">1. Who we are</h2>
            <p>{company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a photography studio operating in {jurisdiction}. We make pictures, license images, and keep client archives. We respect the privacy of our subjects, clients, and visitors.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">2. What we collect</h2>
            <p>When you contact us via the form on this site, we collect the name, email, and message you send. When we engage with you on a project, we retain contracts, briefs, and the imagery we produce in our archive. We do not sell, rent, or trade personal information.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">3. Cookies & analytics</h2>
            <p>This site uses minimal first-party analytics to understand which pages are read. We do not run third-party advertising trackers. You may disable cookies in your browser without affecting site functionality.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">4. Image rights</h2>
            <p>Imagery produced under contract is licensed per the engagement&apos;s terms. We retain copyright unless explicitly transferred. Subjects of portrait sessions sign a release describing the agreed usage. Licensing inquiries can be sent to <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">5. Your rights</h2>
            <p>You may request a copy of any information we hold about you, request correction, or request deletion (subject to legal retention requirements). Write to <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a> and we&apos;ll respond within thirty days.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-ink-primary">6. Contact</h2>
            <p>Questions about this policy: <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
