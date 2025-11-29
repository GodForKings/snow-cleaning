import { TypingText, type TypingTextProps } from '@/shared/components/ui/typing-text'
import type { FC } from 'react'

interface LoopTypingTextProps {
	texts: string[]
	otherProps?: TypingTextProps
}

export const LoopTypingText: FC<LoopTypingTextProps> = props => {
	const { texts, otherProps } = props
	return (
		<div className='flex items-center justify-center'>
			<TypingText
				texts={texts}
				className='text-2xl font-semibold'
				speed={90}
				loop={true}
				pauseDuration={1500}
				showCursor={true}
				cursor='_'
				cursorClassName='text-accent'
				{...otherProps}
			/>
		</div>
	)
}
