'use client'

import { DefaultHeaderH1, cn } from '@/shared'
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card'
import { motion } from 'motion/react'
import Image from 'next/image'
import type { FC } from 'react'
import { statItems } from '../lib/data.hero'
import { StatItem } from './StatItem'

export const AboutUs: FC = () => {
	return (
		<section
			aria-label='О фирме'
			className={cn(
				'grid place-content-center gap-4 lg:grid-cols-2',
				'bg-background rounded-xl p-4',
			)}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, ease: 'linear' }}
				viewport={{ once: true }}
				className={cn('relative min-h-92 w-full overflow-hidden', 'rounded-3xl')}
			>
				<Image
					src='/images/nightHouse.png'
					alt='Ночной снежный дом'
					fill
					loading='eager'
					className='object-cover brightness-90 dark:brightness-75'
				/>

				<div className='absolute inset-0 bg-black/10 backdrop-blur-[1px] dark:bg-black/30' />
			</motion.div>

			<Card className='p-1 lg:p-4'>
				<CardHeader>
					<DefaultHeaderH1 className='text-foreground font-light'>
						<strong>Чистка снега в Красноярске</strong> - о нас
					</DefaultHeaderH1>
				</CardHeader>

				<CardContent className='text-lg leading-relaxed'>
					Мы занимаемся <strong>чисткой снега в Красноярске</strong> уже несколько сезонов подряд.
					Работаем без лишних обещаний - просто приезжаем и делаем красиво: дорожки, крыши, дворы,
					парковки и любые участки. Убираем снег вручную и механически, аккуратно и по-человечески.
					Большинство клиентов остаются с нами на весь сезон.
				</CardContent>

				<div className='grid gap-3 sm:grid-cols-3'>
					{statItems.map(stat => (
						<StatItem statData={stat} key={stat.label} />
					))}
				</div>
			</Card>
		</section>
	)
}
