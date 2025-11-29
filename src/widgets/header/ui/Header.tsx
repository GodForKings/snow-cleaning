import Image from 'next/image'
import Link from 'next/link'

import { NAV_MENU, NavMenu, PAGES, cn } from '@/shared'

import type { FC } from 'react'

export const Header: FC = () => {
	return (
		<header
			className={cn('flex items-center justify-between', 'sticky top-0 z-50 w-full px-6 py-2')}
		>
			<Link href={PAGES.HOME}>
				<Image priority={true} src='/shovel.svg' alt='Логотип компании' width={40} height={40} />
			</Link>

			<NavMenu menuItems={NAV_MENU} />
		</header>
	)
}
