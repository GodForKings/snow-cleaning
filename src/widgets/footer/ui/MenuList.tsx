import Link from 'next/link'

import { cn } from '@/shared'
import { Button } from '@/shared/components/ui/button'

import type { IMenuItem } from '@/shared'
import type { FC } from 'react'

interface MenuListProps {
	MenuItems: IMenuItem[]
	onNewPage: boolean
}

export const MenuList: FC<MenuListProps> = props => {
	const { MenuItems, onNewPage = false } = props

	return (
		<ul className={cn('space-y-2 text-sm')}>
			{MenuItems.map(item => (
				<li key={item.href}>
					<Button mode='link' underline='solid'>
						<Link
							title={item.description}
							className='hover:text-primary transition'
							href={item.href}
							target={onNewPage ? '_blank' : '_self'}
						>
							{item.name}
						</Link>
					</Button>
				</li>
			))}
		</ul>
	)
}
