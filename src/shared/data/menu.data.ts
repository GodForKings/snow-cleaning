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
		description:
			'Услуги снегоуборки для частных домовладений. Освободим ваш участок от снега быстро и качественно',
	},
	{
		href: PAGES.ABOUT,
		name: 'О нас',
		description: 'Работаем оперативно в любую погоду, 24/7',
	},
	{
		href: PAGES.CONTACT_PAGE,
		name: 'Контакты',
		description:
			'Вызвать снегоуборщика? Звоните или пишите! Выезд в течение часа. Срочные вызовы - приоритет',
	},
]
