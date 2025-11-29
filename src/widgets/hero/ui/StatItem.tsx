'use client'
import { cn } from '@/shared'
import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'
import { motion } from 'motion/react'
import type { FC } from 'react'
import type { IStat } from '../lib/types'

interface StatItemProps {
	statData: IStat
}

export const StatItem: FC<StatItemProps> = props => {
	const { statData } = props

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
			transition={{ duration: 0.6, ease: 'easeIn' }}
		>
			<Card className={cn('h-full p-2')} variant='accent'>
				<CardContent className={cn('p-1', 'flex flex-col items-center justify-center gap-2')}>
					<statData.icon className='text-primary size-8' strokeWidth={1.4} />

					<div className='text-center text-xl font-semibold'>{statData.value}</div>
				</CardContent>

				<CardFooter className='text-primary text-center'>{statData.label}</CardFooter>
			</Card>
		</motion.div>
	)
}
