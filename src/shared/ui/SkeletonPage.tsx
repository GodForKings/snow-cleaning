import type { FC } from 'react'

import { cn } from '@/shared'
import { Skeleton } from '../components/ui/skeleton'

export const SkeletonPage: FC = () => {
	return (
		<div
			className={cn(
				'relative min-h-screen w-full overflow-hidden',
				'flex items-center justify-center gap-6',
			)}
		>
			<Skeleton className='bg-accent-foreground size-40' />

			<Skeleton className='bg-accent-foreground size-20' />

			<Skeleton className='bg-accent-foreground size-10' />
		</div>
	)
}
