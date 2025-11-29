import { CONTACT_FOR_ORDER, formatRussianPhone } from '@/shared'
import { MessageCircle, PhoneCall, Send } from 'lucide-react'
import type { IContactData } from './types'

export const cardsContactData: IContactData[] = [
	{
		icon: PhoneCall,
		title: `Позвонить`,
		link: `tel:${CONTACT_FOR_ORDER.Phone}`,
		value: formatRussianPhone(CONTACT_FOR_ORDER.Phone),
		className: 'text-primary',
	},
	{
		icon: MessageCircle,
		title: `Чат в WhatsApp`,
		link: CONTACT_FOR_ORDER.LinkInWhatsApp,
		value: 'whatsapp',
		className: '',
	},
	{
		icon: Send,
		title: 'Чат в telegram',
		link: CONTACT_FOR_ORDER.LinkInTelegram,
		value: 'telegram',
		className: 'text-primary',
	},
]
