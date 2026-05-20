/**
 * GENERATION FINGERPRINT — Lumen & Co Studio
 *   archetype: G (premium tier — T1 8s Veo hero loop)
 *   style: S6 Fashion Editorial × Editorial Warm variant
 *   voice: V2 Intellectual Editorial
 *   card_variant: CV2 (oversized number minimal)
 *   header_variant: center-logo-split
 *   footer_variant: FT2 (asymmetric editorial)
 *   hero_text_pattern: H6 (multi-weight serif mix)
 *   hero_entrance: E2 (word-split rise)
 *   hero_overlay: HO5 (big-stack — bottom-left H1 over video)
 *   about_variant: AB3 (founder portrait + timeline)
 *   contact_variant: CT4 (split photo + form)
 *   work_variant: WK1 (masonry grid editorial)
 *   cta_variant: CTA3 (full-bleed image + overlay)
 */

export const siteConfig = {
  company: {
    name: "Lumen & Co Studio",
    short: "Lumen & Co",
    legalName: "Lumen & Co Studio, LLC",
    tagline: "Photography, considered.",
    yearEstablished: 2019,
    voiceFamily: "V2",
  },
  contact: {
    email: "hello@lumenandco.studio",
    phone: "+1 (323) 555-0142",
    address: {
      line1: "823 Mateo Street, Suite 4",
      city: "Los Angeles",
      region: "CA",
      postal: "90021",
      country: "US",
    },
    hours: "By appointment, Mon–Sat",
  },
  socials: {
    instagram: "https://instagram.com/lumenandco.studio",
    facebook: "",
    linkedin: "https://linkedin.com/company/lumen-and-co-studio",
    x: "",
    youtube: "",
    tiktok: "",
    pinterest: "https://pinterest.com/lumenandco",
    threads: "",
    whatsapp: "",
  },
  seo: {
    siteUrl: "https://lumenandco.studio",
    locale: "en_US",
    twitterHandle: "",
  },
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  headerVariant: "center-logo-split",
  footer: {
    variant: "FT2",
    brandStatement:
      "A small photography studio in the Arts District of Los Angeles, working in portrait, editorial, and brand imagery.",
    footnotes: [
      "All images © Lumen & Co Studio.",
      "Made in Los Angeles. Printed elsewhere.",
    ],
  },
  hero: {
    eyebrow: "Los Angeles · Est. 2019",
    h1: [
      { text: "Photography,", weight: 300, style: "italic" },
      { text: "considered.", weight: 500, style: "normal" },
    ],
    subhead:
      "Portrait, editorial, and brand imagery — made slowly, returned promptly.",
    primaryCta: { label: "Book a consult", href: "/contact" },
    secondaryCta: { label: "See the work", href: "/work" },
  },
  valueProp: {
    eyebrow: "What we make",
    statement:
      "Pictures that look like the person they're of. Pictures that look like the room they're in. Pictures that don't need to be explained.",
  },
  services: [
    {
      slug: "portrait-and-editorial",
      name: "Portrait & Editorial",
      summary:
        "Sessions in the studio or on location. Half-day and full-day rates. Selects delivered within ten working days.",
      detail:
        "Lighting that flatters without flattening. We shoot for the magazine first, the social grid second. Includes art direction, on-set styling collaboration, and a curated edit of 25–60 finals depending on session length.",
      forWho: "Editors, publicists, talent management, individual subjects.",
    },
    {
      slug: "fashion-and-commercial",
      name: "Fashion & Commercial",
      summary:
        "Lookbooks, campaigns, and product-led commercial shoots. Day rates plus crew. Licensing structured per usage.",
      detail:
        "We work with stylists, set designers, and producers we trust. Our deliverables include high-resolution finals, motion stills, and a separate edit cut for paid social. Licensing is transparent and modular.",
      forWho: "Brands, agencies, creative directors, fashion houses.",
    },
    {
      slug: "brand-and-product",
      name: "Brand & Product",
      summary:
        "Studio-based product, still-life, and lifestyle imagery built around a brand system. Recurring engagements offered.",
      detail:
        "We build a visual language with you across a season or a launch — colorways, lighting setups, set-dressing notes — then execute it consistently across every shoot in the contract.",
      forWho: "DTC brands, founders, marketing leads, art directors.",
    },
    {
      slug: "weddings-and-events",
      name: "Weddings & Events",
      summary:
        "Documentary-style coverage for private celebrations and brand events. Limited bookings per season.",
      detail:
        "We shoot the room, not just the schedule — the light, the small gestures, the way a space holds people. Two photographers, full day, second-photographer for ceremonies over 150 guests.",
      forWho: "Couples, event planners, hospitality groups, founders.",
    },
    {
      slug: "family-and-portrait-archive",
      name: "Family & Archive",
      summary:
        "Family sessions and long-form portrait archives. Annual returning clients welcomed at reduced rates.",
      detail:
        "Maternity, newborn, and family work that resists the cliché of the genre — quieter, slower, more interested in the room. Annual archive packages include color-graded print files and an archival box.",
      forWho: "Families, expectant parents, multi-generational portrait clients.",
    },
    {
      slug: "production-and-licensing",
      name: "Production & Licensing",
      summary:
        "Full production for commercial shoots — location scouting, casting, permits, crew. Existing-image licensing handled separately.",
      detail:
        "Our producers handle the LA-specific friction: permits, location releases, parking. For agencies and editors, we license existing work from our archive with transparent usage tiers.",
      forWho: "Agencies, in-house creative teams, publishers, brand marketing.",
    },
  ],
  manifesto: {
    word: "STILL.",
    body:
      "Most pictures move now — they autoplay, scroll, vanish. We make pictures that stay. The kind a person keeps. The kind a brand prints.",
  },
  process: {
    eyebrow: "How we work",
    steps: [
      {
        n: "01",
        title: "Brief & references",
        body:
          "A thirty-minute call. We trade references — yours, ours — and write a one-page brief together before any quote is sent.",
      },
      {
        n: "02",
        title: "Pre-production",
        body:
          "Locations, casting, lighting plan, shot list. For commercial work, a full production document; for portrait, a sketch.",
      },
      {
        n: "03",
        title: "The shoot",
        body:
          "Unhurried. Half-days are six hours, full-days are nine. We bring fewer lights than you'd expect and more time than you'd ask for.",
      },
      {
        n: "04",
        title: "The edit",
        body:
          "We make the first selection. You make the second. We grade, retouch where needed, and deliver via a private archive — yours to keep.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin a conversation",
    headline: "Let's make pictures that mean something.",
    body: "We take on a limited number of engagements each quarter. The earlier the brief, the better the work.",
    primary: { label: "Send a note", href: "/contact" },
    secondary: { label: "Read the journal", href: "#" },
  },
  work: [
    { slug: "callan-issue-04", title: "Callan — Issue 04", category: "Editorial", year: 2025 },
    { slug: "monterey-bay-press", title: "Monterey Bay Press", category: "Brand", year: 2025 },
    { slug: "ines-portrait-series", title: "Inés — Portrait Series", category: "Portrait", year: 2024 },
    { slug: "loma-launch", title: "Loma — Launch Campaign", category: "Commercial", year: 2024 },
    { slug: "salgado-wedding", title: "Salgado Wedding", category: "Wedding", year: 2024 },
    { slug: "atelier-cosima", title: "Atelier Cosima", category: "Brand", year: 2023 },
    { slug: "vox-essay", title: "VOX — Photo Essay", category: "Editorial", year: 2023 },
    { slug: "maison-claire", title: "Maison Claire", category: "Commercial", year: 2023 },
  ],
  about: {
    eyebrow: "About",
    title: "A small studio with two photographers and one printer.",
    body: [
      "Lumen & Co Studio was founded in 2019 by Aria Park and Théo Rivera, both formerly of editorial mastheads in New York and Paris. We moved the studio to Los Angeles because the light here doesn't argue with you.",
      "We accept a small number of commercial and editorial engagements each quarter. Our work is measured rather than produced — the slowness is the point. We print everything we shoot.",
    ],
    timeline: [
      { year: "2019", text: "Founded in Echo Park. First commercial brief: a single perfume bottle, photographed nine ways." },
      { year: "2021", text: "Moved to the Arts District. Hired a third photographer briefly, then went back to two." },
      { year: "2023", text: "Launched a darkroom-grade print service for archival portrait clients." },
      { year: "2025", text: "Began publishing the Lumen & Co Annual, a print-only studio yearbook." },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
