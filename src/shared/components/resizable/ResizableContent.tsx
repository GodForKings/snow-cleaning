import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/shared/components/ui/resizable'
import type { FC } from 'react'

interface ResizableContentProps {
	beforeComponent: React.ReactNode
	afterComponent: React.ReactNode
}

export const ResizableContent: FC<ResizableContentProps> = props => {
	const { beforeComponent, afterComponent } = props

	return (
		<ResizablePanelGroup direction='horizontal' className='min-h-[70vh] w-full rounded-lg border'>
			<ResizablePanel defaultSize={50}>
				<div className='relative flex h-full'>{beforeComponent}</div>
			</ResizablePanel>

			<ResizableHandle withHandle />

			<ResizablePanel defaultSize={50}>
				<div className='relative flex h-full'>{afterComponent}</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	)
}
