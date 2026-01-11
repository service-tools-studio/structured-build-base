import { notFound } from "next/navigation";
import { site } from "@/site.config";
import PageRenderer from "@/components/PageRenderer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = site.pages.find((p) => p.slug === slug);

  if (!page?.meta) return {};

  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}


export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  const page = site.pages.find((p) => p.slug === slug);
  if (!page) return notFound();

  return <PageRenderer sections={page.sections} />;
}