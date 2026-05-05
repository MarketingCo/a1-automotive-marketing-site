import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://a1-automotive-marketing-site.vercel.app";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/transport`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/storage`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/pdi`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/careers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
