'use client'

import { motion } from 'motion/react'
import type { FC } from 'react'

import { CONTACT_FOR_ORDER, DefaultHeaderH1, LoopTypingText, cn } from '@/shared'
import { HeroText } from '../lib/data.hero'

export const Hero: FC = () => {
	return (
		<section
			aria-label='секция приветствия'
			className={cn('relative h-[95vh] w-full overflow-hidden', 'grid place-content-center')}
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'linear' }}
				className={cn(
					'relative z-10 max-w-2xl p-4 md:p-8',
					'bg-accent/20 rounded-3xl backdrop-blur-md',
					'text-center shadow-2xl',
					'flex flex-col items-center justify-center gap-8',
				)}
			>
				<DefaultHeaderH1 className='font-light text-transparent italic [-webkit-text-stroke:1px_var(--accent)]'>
					Уборка снега в частных домах Красноярска
				</DefaultHeaderH1>

				<LoopTypingText
					texts={HeroText}
					otherProps={{
						className: `leading-relaxed text-accent text-xl md:text-4xl`,
					}}
				/>

				<motion.a
					target='_blank'
					href={`${CONTACT_FOR_ORDER.LinkInTelegram}`}
					whileHover={{ scale: 1.04 }}
					whileTap={{ scale: 0.94 }}
					className={cn(
						'text-primary bg-accent rounded-full px-8 py-3 shadow backdrop-blur-md transition',
					)}
				>
					Чат в telegram
				</motion.a>
			</motion.div>
		</section>
	)
}
