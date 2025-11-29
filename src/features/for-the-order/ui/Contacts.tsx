'use client'
import { cn } from '@/shared'
import type { FC } from 'react'
import { cardsContactData } from '../lib/contact.data'
import { CompanyInfo } from './CompanyInfo'
import { ContactCard } from './ContactCard'
import { WorkArea } from './WorkArea'

export const Contacts: FC = () => {
	return (
		<section className={cn('w-full overflow-hidden', 'flex flex-col gap-4')} aria-label=''>
			{/* Информация о компании */}
			<CompanyInfo />

			{/* Контактные карточки */}
			<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
				{cardsContactData.map((cardData, index) => (
					<ContactCard contactData={cardData} key={cardData.title + index} />
				))}
			</div>

			{/* Информация о зоне работы */}
			<WorkArea />
		</section>
	)
}
