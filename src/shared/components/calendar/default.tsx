'use client'

import * as React from 'react'

import { Calendar } from '@/shared/components/ui/calendar'

export default function CalendarDemo() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<Calendar
			mode='single'
			selected={date}
			onSelect={setDate}
			className='border-border rounded-md border shadow-xs'
		/>
	)
}
