import { DefaultHeaderH2, ResizableContent, cn } from '@/shared'
import { Card, CardContent, CardHeader, CardHeading } from '@/shared/components/ui/card'

import Image from 'next/image'
import type { FC } from 'react'

export const ShowDemo: FC = () => {
	return (
		<Card variant={'accent'} className={cn('w-full', 'p-1.5 lg:p-6')} aria-label='процесс работы'>
			<CardHeader>
				<CardHeading>
					<DefaultHeaderH2>Демонстрация</DefaultHeaderH2>
				</CardHeading>
			</CardHeader>

			<CardContent className='p-0'>
				<ResizableContent
					beforeComponent={
						<Image
							src='/images/beforeDemo.png'
							alt='Дом засыпанный снегом'
							fill
							className='object-cover'
						/>
					}
					afterComponent={
						<Image
							src='/images/afterDemo.png'
							alt='Дом очищенный от снега'
							fill
							className='object-cover'
						/>
					}
				/>
			</CardContent>
		</Card>
	)
}
