'use client'

import { Card } from '@/shared/components/ui/card'
import { Snowflake, ThumbsUp, Users } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export const AboutUs = () => {
	return (
		<section className='w-full'>
			<Card className='grid max-w-6xl items-center gap-12 px-4 py-8 lg:grid-cols-2'>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='relative h-80 w-full overflow-hidden rounded-3xl shadow-xl sm:h-96'
				>
					<Image
						src='/nightHouse.png'
						alt='Наша команда'
						fill
						loading='eager'
						className='object-cover brightness-90 dark:brightness-75'
					/>

					<div className='absolute inset-0 bg-black/10 backdrop-blur-[1px] dark:bg-black/30' />
				</motion.div>

				{/* Текст */}

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h1 className='mb-6 text-3xl font-semibold md:text-4xl'>
						Чистка снега в Красноярске - о нас
					</h1>

					<p className='mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
						Мы занимаемся <strong>чисткой снега в Красноярске</strong> уже несколько сезонов подряд.
						Работаем без лишних обещаний - просто приезжаем и делаем красиво: дорожки, крыши, дворы,
						парковки и любые участки. Убираем снег вручную и техникой, аккуратно и по-человечески.
						Большинство клиентов остаются с нами на весь сезон.
					</p>

					<div className='mt-6 grid gap-6 sm:grid-cols-3'>
						<StatItem icon={Users} label='Клиентов за сезон' value='300+' />

						<StatItem icon={ThumbsUp} label='Повторных заказов' value='87%' />

						<StatItem icon={Snowflake} label='Убрано снега' value='Много)' />
					</div>
				</motion.div>
			</Card>
		</section>
	)
}

interface StatProps {
	icon: any
	label: string
	value: string
}

function StatItem({ icon: Icon, label, value }: StatProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.03 }}
			className='rounded-2xl border border-white/20 bg-white/40 p-5 text-center shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/40'
		>
			<Icon className='mx-auto mb-2 size-7 text-blue-600 dark:text-blue-300' />
			<div className='text-2xl font-semibold'>{value}</div>
			<div className='mt-1 text-sm text-gray-600 dark:text-gray-400'>{label}</div>
		</motion.div>
	)
}
