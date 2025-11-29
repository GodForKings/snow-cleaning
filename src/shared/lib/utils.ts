import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { ClassValue } from 'clsx'

/**
 * Функция для объединения классов, позволяет избежать дублей и конфликтов
 * @param inputs принимает **tailwind** классы в виде строки
 * @returns строку классов
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs))
}

/**
 * Форматирует российский номер в красивый вид
 * +79999999999 → +7 (999) 999-99-99
 * @param phone
 * @returns
 */
export const formatRussianPhone = (phone?: string | null): string => {
	if (!phone) return ''

	return phone.replace(/^(\+?7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($2) $3-$4-$5')
}
