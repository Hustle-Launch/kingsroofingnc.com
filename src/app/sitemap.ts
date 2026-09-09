import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kingsroofingnc.com";
  const lastModified = new Date();

  const paths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/residential", priority: 0.9 },
    { path: "/commercial", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/residential/asheville", priority: 0.7 },
    { path: "/residential/waynesville", priority: 0.7 },
    { path: "/residential/highlands", priority: 0.7 },
    { path: "/residential/cashiers", priority: 0.7 },
    { path: "/roofing-color-pickers", priority: 0.7 },
    { path: "/roofing-color-pickers/metal-roofing", priority: 0.6 },
    { path: "/roofing-color-pickers/shingles", priority: 0.6 },
    { path: "/metal-structures", priority: 0.7 },
    { path: "/metal-structures/metal-carport-kits", priority: 0.6 },
    { path: "/metal-structures/pole-truss-kits", priority: 0.6 },
    { path: "/regular-style-metal-carports", priority: 0.6 },
    { path: "/boxed-eave-style-metal-carport", priority: 0.6 },
    { path: "/vertical-roof-style-metal-carport", priority: 0.6 },
    { path: "/pole-truss-stand-roof-kit", priority: 0.6 },
    { path: "/pole-truss-enclosed-kits", priority: 0.6 },
    { path: "/contact/feedback", priority: 0.3 },
  ];

  return paths.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
