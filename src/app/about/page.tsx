import { BreadcrumbCard, CONTACT_FOR_ORDER, PAGES, Wrapper } from '@/shared'
import { AboutUs } from '@/widgets'

import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import type { FC } from 'react'

export const metadata: Metadata = {
	title: 'Чистка снега в Красноярске - Уборка участков, дорожек и крыш.',
	description:
		'Профессиональная чистка снега в Красноярске. Убираем дворы, дорожки, крыши и парковки. Ручная и механизированная уборка. Быстрый выезд, честные цены, работаем как для себя.',
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/about`,
	},
	keywords: [
		'чистка снега красноярск',
		'уборка снега красноярск',
		'расчистка снега частный дом',
		'чистка крыш от снега',
		'механизированная уборка снега',
		'уборка территории от снега',
	],
	openGraph: {
		title: 'Чистка снега в Красноярске | Ручная и механизированная уборка',
		description:
			'Убираем снег быстро и аккуратно. Дорожки, крыши, дворы, парковки. Профессионально, по-человечески и без скрытых доплат.',
		url: `${process.env.NEXT_PUBLIC_MAIN_URL}/about`,
		type: 'article',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MAIN_URL}/images/cleanCourtyard.png`,
				alt: 'Чистка снега в Красноярске - частный дом зимой',
			},
		],
	},
}

const About: FC = () => {
	return (
		<>
			<div className='fixed inset-0 -z-1'>
				<Image
					src='/images/snowHouse.png'
					alt='Заснеженный дом'
					priority
					fill
					className='object-cover'
				/>
			</div>

			<Wrapper ariaLabel='Контент о компании'>
				<BreadcrumbCard
					listBreadcrumb={[{ label: 'О нас', href: PAGES.ABOUT }]}
					className='w-fit'
				/>

				<AboutUs />
			</Wrapper>

			<Script
				id='about-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'LocalBusiness',
						name: 'Чистка снега в Красноярске',
						description:
							'Профессиональная уборка снега в Красноярске: ручная и механизированная чистка дворов, дорожек, крыш и парковок.',
						image: `${process.env.NEXT_PUBLIC_MAIN_URL}/images/cleanCourtyard.png`,
						url: `${process.env.NEXT_PUBLIC_MAIN_URL}/about`,
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Красноярск',
							addressCountry: 'Россия',
						},
						areaServed: 'Красноярск',
						telephone: CONTACT_FOR_ORDER.Phone,
						openingHours: 'Mo-Su 00:00-23:59',
						priceRange: '₽₽',
						serviceType: [
							'Уборка снега',
							'Ручная чистка снега',
							'Механизированная уборка',
							'Чистка крыш',
						],
					}),
				}}
			/>
		</>
	)
}

export default About
