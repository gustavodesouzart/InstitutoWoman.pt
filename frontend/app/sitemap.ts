import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.9, changeFrequency: "yearly" },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/para-si", priority: 0.9, changeFrequency: "monthly" },
    { path: "/agendamento", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contactos", priority: 0.8, changeFrequency: "yearly" },
    { path: "/politica-privacidade", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
