import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const lastModified = "2026-09-25";
const origin = "https://www.bendlogic.app";

const staticEntries: MetadataRoute.Sitemap = [
  { url: `${origin}/`, lastModified, changeFrequency: "weekly", priority: 1 },
  { url: `${origin}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  { url: `${origin}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  { url: `${origin}/guides/conduit-offset-calculator`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  { url: `${origin}/guides/3-point-saddle-bend`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  { url: `${origin}/guides/4-point-saddle-bend`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  { url: `${origin}/guides/rolling-offset-conduit`, lastModified, changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    return staticEntries.map((entry) => ({ ...entry }));
  } catch {
    return staticEntries;
  }
}
