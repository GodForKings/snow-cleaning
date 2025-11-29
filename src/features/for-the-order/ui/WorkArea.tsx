'use client'

import { cn } from '@/shared'
import { MapPinned } from 'lucide-react'
import { motion } from 'motion/react'
import { type FC } from 'react'

export const WorkArea: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80, scale: 0.95 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.7, ease: 'easeIn' }}
			className={cn(
				'rounded-3xl bg-white/40 p-6 backdrop-blur-lg dark:bg-neutral-900/40',
				'flex flex-wrap items-center justify-start gap-4',
			)}
		>
			<div
				className={cn(
					'size-12 rounded-2xl bg-white/50 shadow dark:bg-white/10',
					'flex items-center justify-center',
				)}
			>
				<MapPinned className='text-primary size-7' strokeWidth={1.4} />
			</div>

			<h3 className='text-xl font-medium'>Работаем по району</h3>

			<p className='leading-relaxed text-gray-800 dark:text-gray-200'>
				Выезжаем по всему Красноярску, а также в ближайшие поселки: Солнечный, Берёзовка, Зелёная
				Роща, Пашенный, Удачный, Минино, Элита и другие. Приедем без проблем.
			</p>
		</motion.div>
	)
}
