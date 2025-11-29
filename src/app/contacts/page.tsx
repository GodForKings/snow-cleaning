import { Contacts } from '@/features'
import { BreadcrumbCard, CONTACT_FOR_ORDER, PAGES, Wrapper } from '@/shared'
import type { Metadata } from 'next'

import Image from 'next/image'
import Script from 'next/script'
import type { FC } from 'react'

export const metadata: Metadata = {
	title: 'Контакты | Уборка снега в Красноярске - Вызвать бригаду 24/7',
	description:
		'Контакты службы уборки снега в Красноярске. Принимаем заявки 24/7, выезжаем за 40–60 минут. Работаем без офиса - чистим частные дома, участки, подъезды и территории по всему Красноярску и ближайшим поселкам.',
	keywords: [
		'уборка снега красноярск контакты',
		'вызвать уборку снега',
		'очистка территории от снега красноярск',
		'контакты уборка снега',
		'номер уборщиков снега красноярск',
		'уборка снега частный сектор красноярск',
		'уборка снега телефоны',
		'выездная уборка снега красноярск',
	].join(', '),

	openGraph: {
		title: 'Контакты - Уборка снега в Красноярске | Быстрый выезд 24/7',
		description:
			'Быстрый вызов бригады по уборке снега в Красноярске и пригороде. Принимаем заявки круглосуточно. Телефон, WhatsApp и Telegram для связи.',
		url: `${process.env.NEXT_PUBLIC_MAIN_URL}/contacts`,
		siteName: 'СнегOFF - уборка снега в Красноярске',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_MAIN_URL}/images/snowCovered.png`,
				width: 1200,
				height: 630,
				alt: 'Контакты службы уборки снега в Красноярске',
			},
		],
		type: 'website',
		locale: 'ru_RU',
	},

	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/contacts`,
	},

	robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}

const ContactsPage: FC = () => {
	return (
		<>
			{/* Фоновое изображение */}
			<div className='fixed inset-0 -z-1 h-screen w-full'>
				<Image
					src='/images/snowCovered.png'
					alt='Заснеженный дом'
					fill
					priority
					className='object-cover object-center'
				/>
			</div>

			<Wrapper ariaLabel='Контент о компании'>
				<BreadcrumbCard
					listBreadcrumb={[{ label: 'Контакты', href: PAGES.CONTACT_PAGE }]}
					className='w-fit'
				/>

				<Contacts />
			</Wrapper>

			<Script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'LocalBusiness',
						name: 'СнегOFF — уборка снега в Красноярске',
						description:
							'Уборка снега в Красноярске. Выездные бригады, круглосуточная работа. Телефон, WhatsApp, Telegram. Чистка частных участков, дорожек, домов, крыш.',
						url: `${process.env.NEXT_PUBLIC_MAIN_URL}`,
						telephone: CONTACT_FOR_ORDER.Phone,
						areaServed: 'Красноярск, Красноярский край',
						openingHours: 'Mo-Su 00:00-24:00',
						contactPoint: [
							{
								'@type': 'ContactPoint',
								telephone: CONTACT_FOR_ORDER.Phone,
								contactType: 'customer service',
								availableLanguage: ['Russian'],
							},
						],
						sameAs: [CONTACT_FOR_ORDER.LinkInTelegram, CONTACT_FOR_ORDER.LinkInWhatsApp],
					}),
				}}
			/>
		</>
	)
}

export default ContactsPage
