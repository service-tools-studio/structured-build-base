import { site } from "@/site.config";
import PageRenderer from "@/components/PageRenderer";

export default function Home() {
  return (
    <main>
      <PageRenderer sections={site.home.sections} />
    </main>
  );
}
