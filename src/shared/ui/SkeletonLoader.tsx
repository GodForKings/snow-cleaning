import type { FC } from 'react'

import { cn } from '@/shared'
import { Skeleton } from '../components/ui/skeleton'

export const SkeletonLoader: FC = () => {
	return (
		<div
			className={cn(
				'relative min-h-screen w-full overflow-hidden',
				'flex items-center justify-center gap-6',
			)}
		>
			<Skeleton className='bg-accent-foreground size-40 animate-spin' />

			<Skeleton className='bg-accent-foreground size-20 animate-spin' />

			<Skeleton className='bg-accent-foreground size-10 animate-spin' />
		</div>
	)
}
