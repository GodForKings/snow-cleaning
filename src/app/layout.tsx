import { Inter } from 'next/font/google'

import { ITDEXTRA_LINK, cn } from '@/shared'
import { Footer, Header } from '@/widgets'

import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Уборка снега в Красноярске - Чистка участков, крыш и вывоз снега | Цена от 2000₽',
	description:
		'Уборка снега в Красноярске и пригороде. Ручная и механизированная чистка снега, чистка крыш, вывоз снега, уборка дворов и частных домов. Работаем 24/7. Выезд за 40 минут. Гарантия аккуратной работы.',

	keywords: [
		'уборка снега Красноярск',
		'чистка снега Красноярск',
		'вывоз снега Красноярск',
		'ручная уборка снега',
		'механизированная уборка снега',
		'уборка снега цена',
		'чистка крыш от снега',
		'уборка территории от снега',
		'расчистка снега частный сектор',
	].join(', '),

	openGraph: {
		title: 'Уборка снега в Красноярске - профессионально и быстро',
		description:
			'Ручная и механизированная уборка снега в Красноярске. Чистим дорожки, крыши, дворы, парковки. По-честному, как для себя.',
		url: process.env.NEXT_PUBLIC_MAIN_URL,
		siteName: 'СнегOFF - уборка снега Красноярск',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MAIN_URL}/cleanCourtyard.png`,
				width: 1200,
				height: 630,
				alt: 'Уборка снега в Красноярске, наши работы.',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},

	icons: {
		icon: `/shovel.png`,
		shortcut: '/favicon.ico',
		apple: '/shovel.png',
	},

	manifest: '',

	authors: {
		name: 'ITDextra team',
		url: ITDEXTRA_LINK,
	},

	alternates: {
		canonical: process.env.NEXT_PUBLIC_MAIN_URL,
	},

	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='ru'>
			<body
				className={cn(
					'overflow-x-hidden text-base antialiased',
					'isolate flex flex-col',
					inter.className,
				)}
			>
				<Header />

				{children}

				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
