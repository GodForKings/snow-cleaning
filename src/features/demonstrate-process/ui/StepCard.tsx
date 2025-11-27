'use client'

import { cn } from '@/shared'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { motion } from 'motion/react'
import type { FC } from 'react'
import type { IStep } from '../lib/types'

interface StepCardProps {
	step: IStep
}

export const StepCard: FC<StepCardProps> = props => {
	const { id, Icon, title, text } = props.step

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: id * 0.1 }}
			viewport={{ once: true }}
		>
			<Card variant='default' className='h-full p-4'>
				<CardHeader className='flex'>
					<div className={cn('size-12 rounded-xl border', 'flex items-center justify-center')}>
						{<Icon className='text-primary size-8' strokeWidth={1.4} />}
					</div>

					<CardTitle className=''>{title}</CardTitle>
				</CardHeader>

				<CardContent>{text}</CardContent>
			</Card>
		</motion.div>
	)
}
