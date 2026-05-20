import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

/**
 * FT2 — Asymmetric Editorial Footer
 * 8-col grid, wordmark + manifesto on left (cols 1-4),
 * navigation/contact stacked on right (cols 5-8),
 * editorial copy line under footnotes, social row floats above bottom rule.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg-tertiary border-t border-ink-primary/10">
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-8 gap-12 md:gap-16">
          {/* Left half — wordmark + statement */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block group">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-ink-primary">
                Lumen <span className="italic font-extralight text-accent">&amp;</span> Co
              </div>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-ink-muted mt-2">
                Studio · Los Angeles
              </div>
            </Link>

            <p className="mt-8 md:mt-10 body-prose max-w-md text-ink-body font-display italic text-lg md:text-xl leading-relaxed">
              {siteConfig.footer.brandStatement}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 items-center">
              <SocialLinks socials={siteConfig.socials} />
            </div>
          </div>

          {/* Right half — three small columns */}
          <div className="md:col-span-4 lg:col-span-3 grid grid-cols-2 gap-10">
            <div>
              <div className="eyebrow mb-5">Studio</div>
              <ul className="space-y-3 text-sm text-ink-body">
                {siteConfig.navigation.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-5">Visit</div>
              <address className="not-italic text-sm text-ink-body space-y-1.5 leading-relaxed">
                <div>{siteConfig.contact.address.line1}</div>
                <div>
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.region}{" "}
                  {siteConfig.contact.address.postal}
                </div>
                <div className="pt-3">
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Editorial rule + footnote band */}
        <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-8 border-t border-ink-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-mono text-ink-muted">
            <span>© {year} {siteConfig.company.legalName}.</span>
            {siteConfig.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-muted">
            {siteConfig.footer.footnotes[1]}
          </div>
        </div>
      </div>
    </footer>
  );
}
