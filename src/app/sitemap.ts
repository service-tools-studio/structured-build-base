import { site } from "@/site.config";

export default function sitemap() {
  const baseUrl = "https://structured-build-base.vercel.app";

  const pages = site.pages.map((p) => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pages,
  ];

}
