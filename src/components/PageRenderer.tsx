import SectionRenderer from "@/components/SectionRenderer";
import type { Section } from "@/site.config";

export default function PageRenderer({ sections }: { sections: Section[] }) {
  return (
    <main>
      {sections.map((section, idx) => (
        <SectionRenderer key={idx} section={section} />
      ))}
    </main>
  );
}
