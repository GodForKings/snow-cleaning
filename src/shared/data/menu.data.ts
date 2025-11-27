import { PAGES } from '@/shared'

/**
 * @href ссылка на страницу
 * @name название страницы
 * @description описание страницы
 */
export interface IMenuItem {
	href: string
	name: string
	description: string
}

export const NAV_MENU: IMenuItem[] = [
	{
		href: PAGES.HOME,
		name: 'Главная',
		description: 'Главная страница - здесь всё что мы делаем и кто мы.',
	},
	{
		href: PAGES.ABOUT,
		name: 'О нас',
		description: 'Информация о проекте, его возможностях и принципах работы.',
	},
]
