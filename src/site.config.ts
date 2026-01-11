export type Section =
  | {
    type: "hero";
    eyebrow: string;
    headline: string;
    subhead?: string;
    image?: string;
    pills?: string[];
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  }
  | {
    type: "featureGrid";
    eyebrow?: string;
    heading: string;
    items: { title: string; desc: string }[];
  }
  | {
    type: "steps";
    eyebrow?: string;
    heading: string;
    steps: { title: string; desc: string }[];
    description?: string;
  }
  | {
    type: "testimonials";
    eyebrow?: string;
    heading: string;
    items: { quote: string; name: string; meta?: string }[];
  }
  | {
    type: "faq";
    eyebrow?: string;
    heading: string;
    items: { q: string; a: string }[];
  }
  | {
    type: "cta";
    eyebrow?: string;
    heading: string;
    blurb?: string;
    button: { label: string; href: string };
  };

export type SitePage = {
  slug: string; // "services" -> /services (via /[slug])
  navLabel: string;
  meta?: { title?: string; description?: string };
  sections: Section[];
};

export const site = {
  brand: {
    name: "Your Company Name",
    tagline: "Your company tagline goes here.",
    logo: "/brand/logo.png",
  },

  theme: {
    headingFont: "inter" as any,
    bodyFont: "inter" as any,
    colors: {
      bg: "0 0% 100%",
      fg: "240 10% 3.9%",
      muted: "240 5% 96%",
      border: "240 6% 90%",
      primary: "222 89% 55%",
      accent: "38 92% 50%",
    },
  },

  // ✅ Pages drive both nav + routing (via /[slug])
  pages: [
    {
      slug: "services",
      navLabel: "Services",
      meta: {
        title: "Services",
        description:
          "What’s included in the structured build and what can be added on.",
      },
      sections: [
        {
          type: "featureGrid",
          eyebrow: "Structured build",
          heading: "What’s included",
          items: [
            {
              title: "Up to 5 pages",
              desc: "Home, Services, About, Reviews, Contact.",
            },
            {
              title: "Mobile-first",
              desc: "Polished on phones, tablets, and desktop.",
            },
            {
              title: "SEO basics",
              desc: "Metadata, headings, performance-friendly build.",
            },
            {
              title: "Lead capture",
              desc: "Contact form + booking link or inquiry CTA.",
            },
          ],
        },
        {
          type: "featureGrid",
          eyebrow: "Add-ons",
          heading: "Optional upgrades",
          items: [
            { title: "Extra pages", desc: "Add additional pages as needed." },
            {
              title: "Advanced integrations",
              desc: "Stripe/payment processing, email marketing, etc.",
            },
            {
              title: "Custom tools",
              desc: "Estimators, calculators, interactive widgets.",
            },
            {
              title: "Heavily revised layouts",
              desc: "Deeper layout changes beyond the base structure.",
            },
          ],
        },
        {
          type: "featureGrid",
          eyebrow: "Handled separately",
          heading: "Typically provided by your team",
          items: [
            { title: "Copywriting", desc: "Writing and messaging strategy." },
            { title: "Branding / visual identity", desc: "Logo, brand system, and assets." },
            { title: "Blog", desc: "Ongoing posts, categories, and editorial workflows." },
          ],
        },
        {
          type: "cta",
          eyebrow: "Next step",
          heading: "Ready to launch?",
          blurb:
            "Send a quick note with your business name, services, and preferred timeline. We’ll reply with next steps.",
          button: { label: "Get started", href: "/contact" },
        },
      ],
    },
    {
      slug: "process",
      navLabel: "Process",
      meta: {
        title: "Process",
        description: "A calm, defined process from intake to launch.",
      },
      sections: [
        {
          type: "steps",
          eyebrow: "How it works",
          heading: "A calm, defined process",
          description: 'Each step has a clear deliverable and keeps momentum high.',
          steps: [
            {
              title: "Intake",
              desc: "You share goals, services, and any brand assets.",
            },
            {
              title: "Draft",
              desc: "We apply your content to the structured layout.",
            },
            {
              title: "Review",
              desc: "One revision round—tight and focused.",
            },
            {
              title: "Launch",
              desc: "Deploy, connect domain (if applicable), handoff.",
            },
          ],
        },
        {
          type: "cta",
          eyebrow: "Timeline",
          heading: "Most sites launch in 7–14 days.",
          blurb:
            "Timeline depends on content readiness and the size of your scope.",
          button: { label: "Start your build", href: "/contact" },
        },
      ],
    },
    {
      slug: "reviews",
      navLabel: "Reviews",
      meta: {
        title: "Reviews",
        description: "What clients say about the process and the result.",
      },
      sections: [
        {
          type: "testimonials",
          eyebrow: "What clients say",
          heading: "Results that feel calm and professional",
          items: [
            {
              quote: "Premium feel, fast load, clear calls to action.",
              name: "Happy Client",
              meta: "Local service business",
            },
            {
              quote:
                "Smooth process and a site that feels calm and professional.",
              name: "Another Client",
              meta: "Practitioner",
            },
          ],
        },
        {
          type: "cta",
          eyebrow: "Work together",
          heading: "Want a site that feels premium and clear?",
          blurb: "Share a few details and we’ll recommend the best next step.",
          button: { label: "Contact", href: "/contact" },
        },
      ],
    },
    {
      slug: "faq",
      navLabel: "FAQ",
      meta: {
        title: "Frequently Asked Questions",
        description: "Common questions about scope, timeline, and add-ons.",
      },
      sections: [
        {
          type: "faq",
          eyebrow: "FAQ",
          heading: "Frequently Asked Questions",
          items: [
            {
              q: "Is this a template?",
              a: "Not quite. It’s a structured build — meaning the overall layout and section flow are predefined for speed and clarity. We tailor the site to your brand through fonts, colors, imagery, and copy, and adjust emphasis within the system so it feels specific to your business. Requests that require new layouts, custom functionality, or multiple design directions are scoped separately.",
            },
            {
              q: "How fast can we launch?",
              a: "Typical timeline is 7–14 days depending on content readiness.",
            },
            {
              q: "What’s out of scope?",
              a: "Extra pages, deep SEO, custom features, advanced integrations, and custom tools like calculators. These can be discussed as add-ons at extra cost.",
            },
          ],
        },
        {
          type: "cta",
          eyebrow: "Questions?",
          heading: "Still deciding?",
          blurb: "Send your questions—we’ll reply with a clear recommendation.",
          button: { label: "Ask a question", href: "/contact" },
        },
      ],
    },
  ] satisfies SitePage[],

  // Home is still a dedicated route (/). Keep its data here.
  // Your Home page can render these sections the same way PageRenderer does.
  home: {
    sections: [
      {
        type: "hero",
        eyebrow: "Structured build",
        headline: "This is a headline for your website.",
        subhead:
          "This is a subheading that provides more detail about your services and value proposition.",
        primaryCta: { label: "Get started", href: "/contact" },
        secondaryCta: { label: "View services", href: "/services" },
        image: "/images/hero.png",
        pills: ["No subscriptions", "7–14 day launch", "Built for service businesses"],
      },
      {
        type: "featureGrid",
        eyebrow: "Structured build",
        heading: "What’s included",
        items: [
          {
            title: "Up to 5 pages",
            desc: "Home, Services, About, Reviews, Contact.",
          },
          {
            title: "Mobile-first",
            desc: "Polished on phones, tablets, and desktop.",
          },
          {
            title: "SEO basics",
            desc: "Metadata, headings, performance-friendly build.",
          },
          {
            title: "Lead capture",
            desc: "Contact form + booking link or inquiry CTA.",
          },
        ],
      },
      {
        type: "featureGrid",
        eyebrow: "Add-ons",
        heading: "Optional upgrades",
        items: [
          { title: "Extra pages", desc: "Add additional pages as needed." },
          {
            title: "Advanced integrations",
            desc: "Stripe/payment processing, email marketing, etc.",
          },
          {
            title: "Custom tools",
            desc: "Estimators, calculators, interactive widgets.",
          },
          {
            title: "Heavily revised layouts",
            desc: "Deeper layout changes beyond the base structure.",
          },
        ],
      },
      {
        type: "cta",
        eyebrow: "Next step",
        heading: "Ready to launch?",
        blurb:
          "Send a quick note with your business name, services, and preferred timeline. We’ll reply with next steps.",
        button: { label: "Get started", href: "/contact" },
      }
    ] satisfies Section[],
  },

  // Contact usually remains a dedicated page (/contact).
  contact: {
    title: "Ready to launch?",
    blurb:
      "Send a quick note with your business name, services, and preferred timeline. We’ll reply with next steps.",
    email: "hello@example.com",
    city: "[Your City, State]",
    leftPanel: {
      heading: "What to share",
      description:
        "To keep things efficient, please include the following in your message:",
      points: [
        "Your business name and services",
        "Your preferred launch timeline",
        "Any existing brand or website links (if applicable)"
      ],
      note: 'This is a structured build with a defined scope and timeline. If your project requires something more custom, we’ll discuss next steps before moving forward.',
    }
  },

  footer: {
    finePrint: `© ${new Date().getFullYear()} Sites by Jasmin | Structured Build Demo`,
  },
} as const;
