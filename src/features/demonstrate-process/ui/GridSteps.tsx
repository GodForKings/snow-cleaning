'use client'
import type { FC } from 'react'

import { CardContent } from '@/shared/components/ui/card'
import { steps } from '../lib/data.process'
import { StepCard } from './StepCard'

export const GridSteps: FC = () => {
	return (
		<CardContent className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
			{steps.map(step => (
				<StepCard key={step.id} step={step} />
			))}
		</CardContent>
	)
}
