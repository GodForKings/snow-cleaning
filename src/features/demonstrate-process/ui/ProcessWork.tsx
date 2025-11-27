import { DefaultHeaderH2, cn } from '@/shared'
import { Card, CardHeader, CardHeading } from '@/shared/components/ui/card'
import type { FC } from 'react'
import { GridSteps } from './GridSteps'

export const ProcessWork: FC = () => {
	return (
		<Card variant={'default'} className={cn('w-full', 'p-1.5 lg:p-6')} aria-label='процесс работы'>
			<CardHeader>
				<CardHeading>
					<DefaultHeaderH2>Как мы работаем</DefaultHeaderH2>
				</CardHeading>
			</CardHeader>

			{/* Сетка шагов */}
			<GridSteps />
		</Card>
	)
}
