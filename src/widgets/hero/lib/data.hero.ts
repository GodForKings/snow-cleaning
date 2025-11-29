import { Snowflake, ThumbsUp, Users } from 'lucide-react'
import type { IStat } from './types'

export const HeroText: string[] = ['Быстро', 'Надёжно', 'В любую погоду']

export const statItems: IStat[] = [
	{ icon: Users, label: 'Клиентов за сезон', value: '300+' },
	{ icon: ThumbsUp, label: 'Повторных заказов', value: '~87%' },
	{ icon: Snowflake, label: 'Убрано снега', value: 'Очень много!' },
]
