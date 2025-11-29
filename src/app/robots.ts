import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseUrl =
		process.env.NEXT_PUBLIC_MAIN_URL || 'https://xn--80aaabll7aebyfdjshdhhdw2y.xn--p1ai'

	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}
