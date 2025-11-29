'use client'

import Link from 'next/link'

import { CONTACT_FOR_ORDER, PAGES, cn } from '@/shared'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuPopup,
	NavigationMenuPositioner,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/shared/components/ui/base-navigation-menu'

import type { IMenuItem } from '@/shared'
import type { FC } from 'react'

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink render={<Link href={href} />}>
				<div className='text-sm leading-none font-medium'>{title}</div>
				<p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
			</NavigationMenuLink>
		</li>
	)
}

interface NavMenuProps {
	menuItems: IMenuItem[]
}

export const NavMenu: FC<NavMenuProps> = props => {
	const { menuItems } = props

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Навигация</NavigationMenuTrigger>

					<NavigationMenuContent>
						<ul className={cn('grid gap-2 lg:grid-cols-2', 'md:w-[400px] lg:w-[500px]')}>
							<li className='row-span-3'>
								<NavigationMenuLink
									render={
										<Link
											className='from-muted/50 to-muted flex h-full w-full flex-col justify-center rounded-md bg-linear-to-b p-4 no-underline outline-hidden select-none focus:shadow-md'
											href={PAGES.HOME}
										/>
									}
								>
									<div className='text-lg font-medium'>Главная Страница</div>

									<p className='text-muted-foreground text-sm leading-tight'>
										Тут вы можете ознакомиться с процессом работы, посмотреть примеры и получить
										ответы на самые частые вопросы.
									</p>
								</NavigationMenuLink>
							</li>

							{menuItems.map(item => (
								<ListItem href={item.href} title={item.name} key={item.description + item.href}>
									{item.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink
						render={
							<Link
								href={`tel:${CONTACT_FOR_ORDER.Phone}`}
								className={navigationMenuTriggerStyle()}
							/>
						}
					>
						Позвонить
					</NavigationMenuLink>
				</NavigationMenuItem>

				{/* <NavigationMenuItem>
					<NavigationMenuTrigger>Услуги</NavigationMenuTrigger>

					<NavigationMenuContent>
						<ul
							className={cn(
								'grid gap-2 md:grid-cols-2 lg:grid-cols-3',
								'md:w-[400px] lg:w-[600px]',
							)}
						>

						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem> */}
			</NavigationMenuList>

			<NavigationMenuPositioner>
				<NavigationMenuPopup className={cn('z-10 max-h-[65vh] overflow-y-auto')} />
			</NavigationMenuPositioner>
		</NavigationMenu>
	)
}
