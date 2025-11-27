import { cn, DefaultHeaderH2, VariableAccordion } from '@/shared'
import { Card, CardContent, CardHeader, CardHeading } from '@/shared/components/ui/card'
import { type FC } from 'react'
import { faqItemsMain } from '../lib/data.faq'

export const FAQMain: FC = () => {
	return (
		<Card className={cn('w-full', 'p-1.5 lg:p-6')} aria-label='FAQ секция для посетителя'>
			<CardHeader>
				<CardHeading>
					<DefaultHeaderH2>Ответы на частые вопросы</DefaultHeaderH2>
				</CardHeading>
			</CardHeader>

			<CardContent>
				<VariableAccordion variant={'solid'} faqItems={faqItemsMain} />
			</CardContent>
		</Card>
	)
}
