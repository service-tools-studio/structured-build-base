export const site = {
  brand: {
    name: "Your Company Name",
    tagline: "Your company tagline goes here.",
    logo: "/brand/logo.png",
  },

  theme: {
    font: "inter" as "inter" | "manrope" | "instrument",
    colors: {
      bg: "0 0% 100%",
      fg: "240 10% 3.9%",
      muted: "240 5% 96%",
      border: "240 6% 90%",
      primary: "222 89% 55%",
      accent: "38 92% 50%",
    },
  },

  nav: [
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
  ],

  hero: {
    headline: "This is a headline for your website.",
    subhead:
      "This is a subheading that provides more detail about your services and value proposition.",
    primaryCta: { label: "Get started", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
    image: "/images/hero.png",
    pills: ["No subscriptions", "7–14 day launch", "Built for service businesses"],
  },

  services: {
    title: "What’s included",
    items: [
      { title: "Up to 5 pages", desc: "Home, Services, About, Reviews, Contact." },
      { title: "Mobile-first", desc: "Polished on phones, tablets, and desktop." },
      { title: "SEO basics", desc: "Metadata, headings, performance-friendly build." },
      { title: "Lead capture", desc: "Contact form + booking link or inquiry CTA." },
    ],
    addOns: [
      "Extra pages",
      "Advanced integrations (e.g. CRM, email marketing)",
      "Custom tools (e.g. estimators, calculators)",
      "Heavily revised layouts",
    ],
    handledSeparately: [
      "Copywriting",
      "Branding / visual identity",
      "Blog",
    ]
  },

  process: {
    title: "A calm, defined process",
    steps: [
      { title: "Intake", desc: "You share goals, services, and any brand assets." },
      { title: "Draft", desc: "We apply your content to the structured layout." },
      { title: "Review", desc: "One revision round—tight and focused." },
      { title: "Launch", desc: "Deploy, connect domain (if applicable), handoff." },
    ],
  },

  testimonials: {
    title: "What clients say",
    items: [
      { quote: "Premium feel, fast load, clear calls to action.", name: "Happy Client", meta: "Local service business" },
      { quote: "Smooth process and a site that feels calm and professional.", name: "Another Client", meta: "Practitioner" },
    ],
  },

  faq: {
    title: "Fequently Asked Questions",
    items: [
      {
        q: "Is this a template?",
        a: "The overall layout and section flow are predefined for speed and clarity. Your fonts, colors, imagery, and copy are applied to that structure and styled to match your brand.",
      },
      { q: "How fast can we launch?", a: "Typical timeline is 7–14 days depending on content readiness." },
      { q: "What’s out of scope?", a: "Extra pages, deep SEO, custom features, advanced integrations, and custom tools like calculators." },
    ],
  },

  contact: {
    title: "Ready to launch?",
    blurb:
      "Send a quick note with your business name, services, and preferred timeline. We’ll reply with next steps.",
    email: "hello@example.com",
    city: "[Your City, State]",
  },

  footer: {
    finePrint: `© ${new Date().getFullYear()} Structured Build Demo`,
  },
} as const;
