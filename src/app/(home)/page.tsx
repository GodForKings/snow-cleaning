import { ProcessWork, ShowDemo } from '@/features'
import { CONTACT_FOR_ORDER, Wrapper } from '@/shared'
import { FAQMain, Hero } from '@/widgets'

import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
	return (
		<>
			{/* Фоновое изображение */}
			<Image
				src='/cleanCourtyard.png'
				alt='Заснеженный дом'
				fill
				priority
				className='object-cover'
			/>

			<Wrapper ariaLabel='Уборка снега Красноярск контент'>
				<Hero />

				<ProcessWork />

				<ShowDemo />

				<FAQMain />
			</Wrapper>

			<Script
				id='snowoff-main-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'LocalBusiness',
						name: 'уборкаснегакрасноярск.рф - уборка снега в Красноярске',
						description:
							'Профессиональная уборка снега в Красноярске: ручная и механизированная чистка участков, крыш и вывоз снега.',
						image: `${process.env.NEXT_PUBLIC_MAIN_URL}/cleanCourtyard.png`,
						url: process.env.NEXT_PUBLIC_MAIN_URL,
						telephone: CONTACT_FOR_ORDER.Phone,
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Красноярск',
							addressCountry: 'Россия',
						},
						areaServed: 'Красноярск',
						openingHours: 'Mo-Su 00:00-23:59',
						priceRange: '₽₽',
						makesOffer: [
							{
								'@type': 'Offer',
								itemOffered: 'Уборка снега',
							},
							{
								'@type': 'Offer',
								itemOffered: 'Вывоз снега',
							},
							{
								'@type': 'Offer',
								itemOffered: 'Чистка крыш от снега',
							},
						],
					}),
				}}
			/>
		</>
	)
}
