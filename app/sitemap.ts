import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vwani.in'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vaibhav-wani`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
        url: `${baseUrl}/prime-web-tech`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
  ]
}
