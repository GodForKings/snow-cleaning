'use client'

import { cn } from '@/shared'
import { motion } from 'motion/react'
import Link from 'next/link'

import { Button } from '@/shared/components/ui/button'
import type { FC } from 'react'
import type { IContactData } from '../lib/types'

interface ContactCardProps {
	contactData: IContactData
}

export const ContactCard: FC<ContactCardProps> = props => {
	const { icon: Icon, link, value, className, title } = props.contactData

	return (
		<motion.div
			initial={{ x: 30 }}
			whileInView={{ x: 0 }}
			whileHover={{ scale: 0.98 }}
			transition={{ duration: 0.2 }}
			className={cn(
				'rounded-3xl bg-white/40 p-6 backdrop-blur-lg dark:bg-neutral-900/40',
				'flex flex-col items-start justify-center gap-3',
			)}
		>
			<div
				className={`flex size-12 items-center justify-center rounded-2xl bg-white/50 shadow dark:bg-white/10`}
			>
				<Icon className={cn('size-6', className)} />
			</div>

			<h3 className='text-xl font-medium'>{title}</h3>

			<Button mode='link' underline='solid'>
				<Link href={link} className='text-gray-800 hover:underline dark:text-gray-200'>
					{value}
				</Link>
			</Button>
		</motion.div>
	)
}
