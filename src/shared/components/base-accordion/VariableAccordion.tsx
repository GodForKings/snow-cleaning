import { cn, type FAQItem } from '@/shared'
import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from '@/shared/components/ui/base-accordion'

import type { FC } from 'react'

interface VariableAccordionProps {
	faqItems: FAQItem[]
	variant?: 'default' | 'outline' | 'solid' | null
	multiple?: boolean | undefined
	indicator?: 'plus' | 'arrow' | 'none'
	className?: string
}

export const VariableAccordion: FC<VariableAccordionProps> = props => {
	const { faqItems, variant = 'default', indicator = 'arrow', multiple = true, className } = props

	return (
		<Accordion
			variant={variant}
			indicator={indicator}
			multiple={multiple}
			className={cn('w-full', className)}
		>
			{faqItems?.map(item => (
				<AccordionItem value={`reui-${item.id}`} key={item.id}>
					<AccordionHeader>
						<AccordionTrigger>{item.question}</AccordionTrigger>
					</AccordionHeader>

					<AccordionPanel>{item.answer}</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	)
}
