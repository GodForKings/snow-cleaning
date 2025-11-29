import type { IMenuItem } from './menu.data'

const NUMBER_PHONE_ROBOT: string = '+79964301016' as const
const TG_LINK_BOB: string = 'https://t.me/Thief_1n_Law' as const
const WHATSAPP_LINK_BOB: string = 'https://wa.me/79964301016' as const
export const ITDEXTRA_LINK: string = 'https://itdextra.ru' as const
export const GIT_LINK: string = 'https://github.com/GodForKings' as const

export const CONTACT_MENU: IMenuItem[] = [
	{
		name: 'GitHub',
		href: GIT_LINK,
		description: 'Ссылка на профиль разработчика в GitHub',
	},
	{
		name: 'ITDextra',
		href: ITDEXTRA_LINK,
		description: 'Веб-разработка и IT-решения для бизнеса в СНГ',
	},
]

export const CONTACT_FOR_ORDER = {
	Phone: NUMBER_PHONE_ROBOT,
	LinkInTelegram: TG_LINK_BOB,
	LinkInWhatsApp: WHATSAPP_LINK_BOB,
} as const
