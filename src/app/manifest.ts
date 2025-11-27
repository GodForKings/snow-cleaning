import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Снег OFF',
		short_name: 'СнегOFF',
		description: 'Уборка снега в Красноярске',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: `/shovel.png`,
				sizes: '192x192',
				type: 'image/png',
			},
		],
	}
}
