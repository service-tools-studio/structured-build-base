import type { Section } from "@/site.config";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGridSection from "@/components/sections/FeatureGridSection";
import StepsSection from "@/components/sections/StepsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "hero":
      return <HeroSection section={section} />;
    case "featureGrid":
      return <FeatureGridSection section={section} />;
    case "steps":
      return <StepsSection section={section} />;
    case "testimonials":
      return <TestimonialsSection section={section} />;
    case "faq":
      return <FaqSection section={section} />;
    case "cta":
      return <CtaSection section={section} />;
    default:
      return null;
  }
}
