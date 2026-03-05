import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://helpwithmyassignments.com";

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Service pages
    { url: `${baseUrl}/assignment-writing-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/assignment-writing-help`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/cheap-assignment-writing-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/urgent-assignment-writing-help`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/law-assignment-writing-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/nursing-assignment-writing-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/mba-assignment-writing-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    // Location pages
    { url: `${baseUrl}/australia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/uk`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/canada`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/uae`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/india`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
  ];

  // Dynamic blog posts
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
    });

    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    // DB not ready
  }

  return [...staticRoutes, ...blogRoutes];
}
