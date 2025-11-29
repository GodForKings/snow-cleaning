import { DefaultHeaderH1, LoopTypingText, cn } from '@/shared'

import { type FC } from 'react'

export const CompanyInfo: FC = () => {
	return (
		<div
			className={cn(
				'rounded-3xl bg-white/40 p-6 backdrop-blur-lg dark:bg-neutral-900/40',
				'grid place-content-center',
			)}
		>
			<div
				className={cn('flex flex-col items-center justify-center gap-4 text-center', 'max-w-3xl')}
			>
				<DefaultHeaderH1 className='text-foreground font-light'>
					Точки контакта для чистки от снега
				</DefaultHeaderH1>

				<LoopTypingText
					texts={[
						'У нас нет офиса - вся работа на выезде',
						'Чистим участки по-всему Красноярску и ближайшим поселкам',
						'Пишите или звоните - всегда отвечаем и приезжаем быстро',
					]}
					otherProps={{
						className: 'text-xl leading-relaxed text-gray-800 dark:text-gray-200',
						showCursor: false,
						speed: 60,
					}}
				/>
			</div>
		</div>
	)
}
