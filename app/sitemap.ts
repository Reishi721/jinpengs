import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goldpanther.com.cn"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "zh-CN": baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "zh-CN": `${baseUrl}/about`,
          en: `${baseUrl}/en/about`,
        },
      },
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-CN": `${baseUrl}/products`,
          en: `${baseUrl}/en/products`,
        },
      },
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "zh-CN": `${baseUrl}/careers`,
          en: `${baseUrl}/en/careers`,
        },
      },
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          "zh-CN": `${baseUrl}/news`,
          en: `${baseUrl}/en/news`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          "zh-CN": `${baseUrl}/contact`,
          en: `${baseUrl}/en/contact`,
        },
      },
    },
  ]
}
