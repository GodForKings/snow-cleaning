import { TextReveal } from '@/shared/components/ui/text-reveal'
import type { FC } from 'react'

interface NeonGlowText {
	currentText: string
	classNameText?: string
}

export const NeonGlowText: FC<NeonGlowText> = props => {
	const { currentText, classNameText } = props

	return (
		<TextReveal
			variant='blur'
			className={classNameText}
			delay={0.7}
			startOnView={true}
			staggerDelay={0.05}
		>
			{currentText}
		</TextReveal>
	)
}
