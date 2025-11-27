# Уборка снега в Красноярске

![Badge](https://img.shields.io/badge/Next.js-16.0.3-black) ![Badge](https://img.shields.io/badge/TypeScript-5-blue) ![Badge](https://img.shields.io/badge/TailwindCSS-4-green) ![Badge](https://img.shields.io/badge/Deploy-Vercel/VPS-orange)

## Описание

Веб-приложение для услуг ручной и механической уборки снега в частном секторе Красноярска.

- **Технически**: Responsive дизайн, dark/light mode (авто по теме телефона).

Статус: Разработка (frontend на Next 16 + TS + Tailwind + ReUI; backend на Node.js + Express).

## Технологический стек

- **Frontend**: Next.js 16, React 19 (обновить до 18 для стабильности), TypeScript 5
- **Стили**: TailwindCSS 4, tw-animate-css, globals.css с dark mode
- **Компоненты**: ReUI (@base-ui-components), Radix UI, Lucide icons, React Hook Form, TanStack Table
- **Инструменты**: ESLint 9, Prettier, Zod
- **Deploy**: Frontend на VPS, backend на Vercel

## Установка

1. Клонируй репозиторий: `git clone 'this url'`
2. Установи зависимости: `npm install`
3. Настрой env: Создай `.env` с переменными (NEXT_PUBLIC_MAIN_URL)

## Запуск

- Разработка: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`

## Deployment

- **Frontend**: VPS
- **Backend**: Vercel — deploy Express API для заказов
- **CI/CD**: _GitHub Actions_

## Roadmap

- Интеграция backend API
- Калькулятор цены (React Day Picker для дат)
- Админ-панель с таблицами (TanStack) и drag-n-drop

## Лицензия

MIT — свободно используй, но attribution appreciated
