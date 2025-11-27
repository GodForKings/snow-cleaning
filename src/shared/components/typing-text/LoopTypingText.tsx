import { cn } from '@/shared'
import { TypingText } from '@/shared/components/ui/typing-text'
import type { FC } from 'react'

interface LoopTypingTextProps {
	texts: string[]
	classNameText?: string
}

export const LoopTypingText: FC<LoopTypingTextProps> = props => {
	const { texts, classNameText } = props
	return (
		<div className='flex items-center justify-center'>
			<TypingText
				texts={texts}
				className={cn('text-2xl font-semibold', classNameText)}
				speed={90}
				loop={true}
				pauseDuration={1500}
				showCursor={true}
				cursor='_'
				cursorClassName='text-accent'
			/>
		</div>
	)
}
