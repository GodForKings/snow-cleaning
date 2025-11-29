import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl =
		process.env.NEXT_PUBLIC_MAIN_URL || 'https://xn--80aaabll7aebyfdjshdhhdw2y.xn--p1ai'

	return [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contacts`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
	]
}
