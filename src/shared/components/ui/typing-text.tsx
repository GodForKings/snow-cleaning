'use client'

import { cn } from '@/shared/lib/utils'
import {
	motion,
	useInView,
	type MotionProps,
	type UseInViewOptions,
	type Variants,
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/**
 * Типы предустановленных анимаций (пока не используются, но зарезервированы для расширения).
 */
type AnimationVariant =
	| 'fadeIn'
	| 'blurIn'
	| 'blurInUp'
	| 'blurInDown'
	| 'slideUp'
	| 'slideDown'
	| 'slideLeft'
	| 'slideRight'
	| 'scaleUp'
	| 'scaleDown'

/**
 * Свойства компонента TypingText — анимированного текста с эффектом "печатания".
 */
export interface TypingTextProps extends Omit<MotionProps, 'children'> {
	/**
	 * Текст для анимации (если используется один текст)
	 */
	text?: string

	/**
	 * Массив текстов для циклической анимации (перебор по кругу)
	 */
	texts?: string[]

	/**
	 * Скорость печати (в миллисекундах за символ)
	 * @default 100
	 */
	speed?: number

	/**
	 * Задержка перед началом анимации
	 * @default 0
	 */
	delay?: number

	/**
	 * Показывать ли мигающий курсор
	 * @default true
	 */
	showCursor?: boolean

	/**
	 * Символ курсора
	 * @default '|'
	 */
	cursor?: string

	/**
	 * Дополнительный className для курсора
	 */
	cursorClassName?: string

	/**
	 * Запускать ли цикл анимации по кругу (если передан массив texts)
	 * @default false
	 */
	loop?: boolean

	/**
	 * Пауза между циклами печати при loop
	 * @default 2000
	 */
	pauseDuration?: number

	/**
	 * Кастомный className для контейнера
	 */
	className?: string

	/**
	 * Колбэк, вызываемый при завершении печати текста
	 */
	onComplete?: () => void

	/**
	 * Запускать анимацию только когда компонент попадает в зону видимости
	 * @default true
	 */
	startOnView?: boolean

	/**
	 * Выполнить анимацию только один раз
	 * @default false
	 */
	once?: boolean

	/**
	 * Предустановленная анимация для расширения функционала (пока не используется)
	 */
	animation?: AnimationVariant

	/**
	 * Дополнительный отступ для триггера появления в области видимости
	 */
	inViewMargin?: UseInViewOptions['margin']
}

/**
 * Варианты анимации мигающего курсора
 */
const cursorVariants: Variants = {
	blinking: {
		opacity: [0, 0, 1, 1],
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatDelay: 0,
			ease: 'linear',
			times: [0, 0.5, 0.5, 1],
		},
	},
}

/**
 * Компонент TypingText —
 * Анимирует отображение текста с эффектом "машинки" (постепенная печать символов),
 * поддерживает:
 * - одиночный текст
 * - массив текстов с циклическим перебором
 * - задержку перед началом
 * - запуск при попадании в viewport
 * - опциональный курсор
 * - повторяющийся loop-анимационный цикл
 *
 * Подходит для заголовков, hero-блоков, баннеров, а также акцентов в UI.
 */
export function TypingText({
	text,
	texts,
	speed = 100,
	delay = 0,
	showCursor = true,
	cursorClassName = '',
	cursor = '|',
	loop = false,
	pauseDuration = 2000,
	className,
	onComplete,
	startOnView = true,
	once = false,
	inViewMargin,
	...props
}: TypingTextProps) {
	const ref = useRef<HTMLSpanElement>(null)

	// Проверяем, находится ли текст в зоне видимости
	const isInView = useInView(ref, { once, margin: inViewMargin as UseInViewOptions['margin'] })

	const [hasAnimated, setHasAnimated] = useState(false)
	const [displayText, setDisplayText] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isTyping, setIsTyping] = useState(false)
	const [currentTextIndex, setCurrentTextIndex] = useState(0)

	// Определяем, должен ли компонент начать анимацию
	const shouldStart = !startOnView || (isInView && (!once || !hasAnimated))

	const textArray = texts && texts.length > 0 ? texts : [text]
	const currentText = textArray[currentTextIndex] ?? ''

	/**
	 * Старт анимации после задержки
	 */
	useEffect(() => {
		if (!shouldStart) return
		const timeout = setTimeout(() => {
			setIsTyping(true)
			setHasAnimated(true)
		}, delay)

		return () => clearTimeout(timeout)
	}, [delay, shouldStart])

	/**
	 * Логика печатания текста
	 */
	useEffect(() => {
		if (!isTyping) return

		if (currentIndex < currentText.length) {
			const timeout = setTimeout(() => {
				setDisplayText(currentText.slice(0, currentIndex + 1))
				setCurrentIndex(currentIndex + 1)
			}, speed)

			return () => clearTimeout(timeout)
		} else {
			// Печать завершена
			onComplete?.()

			if (loop && texts && texts.length > 1) {
				const timeout = setTimeout(() => {
					setDisplayText('')
					setCurrentIndex(0)
					setCurrentTextIndex(prev => (prev + 1) % texts.length)
				}, pauseDuration)

				return () => clearTimeout(timeout)
			}
		}
	}, [currentIndex, currentText, isTyping, speed, loop, texts, pauseDuration, onComplete])

	/**
	 * Базовые анимации для появления контейнера
	 */
	const finalVariants = {
		container: {
			hidden: { opacity: 0, y: 10 },
			show: { opacity: 1, y: 0, transition: { staggerChildren: 0.02 } },
			exit: { opacity: 0 },
		},
	}

	const MotionComponent = motion.span

	return (
		<MotionComponent
			ref={ref}
			variants={finalVariants.container as Variants}
			initial='hidden'
			whileInView={startOnView ? 'show' : undefined}
			animate={startOnView ? undefined : 'show'}
			exit='exit'
			className={cn('whitespace-pre-wrap', className)}
			viewport={{ once }}
			{...props}
		>
			<span style={{ display: 'inline-flex', alignItems: 'center' }}>
				{displayText}

				{showCursor && (
					<motion.span
						variants={cursorVariants}
						animate='blinking'
						className={cn(
							'text-foreground ms-1 inline-block w-px font-normal select-none',
							cursorClassName,
						)}
					>
						{cursor}
					</motion.span>
				)}
			</span>
		</MotionComponent>
	)
}
