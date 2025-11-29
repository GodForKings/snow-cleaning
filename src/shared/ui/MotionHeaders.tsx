'use client'
import { cn } from '@/shared'
import { motion } from 'motion/react'
import type { FC } from 'react'

interface DefaultHeaderProps {
	children: React.ReactNode
	className?: string
}

export const DefaultHeaderH2: FC<DefaultHeaderProps> = props => {
	const { children, className } = props

	return (
		<motion.h2
			itemProp='headline'
			initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
			whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
			transition={{ duration: 0.6 }}
			className={cn('text-center text-3xl font-medium md:text-4xl', className)}
		>
			{children}
		</motion.h2>
	)
}

export const DefaultHeaderH1: FC<DefaultHeaderProps> = props => {
	const { className, children } = props
	return (
		<motion.h1
			initial={{ filter: 'blur(8px)', opacity: 0 }}
			whileInView={{ filter: 'none', opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: 0.3, ease: 'linear' }}
			className={cn('text-accent text-center text-3xl font-medium md:text-5xl', className)}
			itemProp='headline'
		>
			{children}
		</motion.h1>
	)
}
