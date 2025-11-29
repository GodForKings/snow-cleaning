import { CONTACT_MENU, NAV_MENU, cn } from '@/shared'

import { ColWrap } from './ColWrap'
import { MenuList } from './MenuList'

import type { FC } from 'react'

export const Footer: FC = () => {
	return (
		<footer className={cn('border-border border-t', 'bg-accent w-full')}>
			<div className={cn('grid gap-8 md:grid-cols-3', 'container px-5 py-10')}>
				{/* Column 1 */}
				<ColWrap>
					<h2 className='text-primary text-xl font-semibold'>Уборка Снега в Красноярске</h2>

					<p className='text-muted-foreground text-xs'>
						© {new Date().getFullYear()} ITDextra. Все права защищены.
					</p>
				</ColWrap>

				{/* Column 2 */}
				<ColWrap>
					<h3 className='text-primary font-semibold'>Навигация</h3>

					<MenuList MenuItems={NAV_MENU} onNewPage={false} />
				</ColWrap>

				{/* Column 3 */}
				<ColWrap>
					<h3 className='text-primary font-semibold'>Контакты и ресурсы</h3>

					<MenuList MenuItems={CONTACT_MENU} onNewPage={true} />
				</ColWrap>
			</div>
		</footer>
	)
}
