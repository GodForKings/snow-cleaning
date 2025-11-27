import type { FC } from 'react'

import { cn } from '@/shared'

interface WrapperProps {
	ariaLabel: string
	className?: string
	children: React.ReactNode
}

export const Wrapper: FC<WrapperProps> = props => {
	const { ariaLabel, children, className } = props

	return (
		<main
			aria-label={ariaLabel}
			className={cn(
				'flex flex-col justify-center gap-6 lg:gap-10',
				'container min-h-screen pb-6',
				className,
			)}
		>
			{children}
		</main>
	)
}
