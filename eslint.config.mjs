import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import nextCore from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	// Next.js база
	...nextCore,
	...nextTs,

	// Правила для TS/TSX
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
				project: './tsconfig.json',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			import: importPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			/* TypeScript правила */
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					varsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',

			/* Чистка импортов */
			'import/no-unused-modules': [
				'warn',
				{
					unusedExports: true,
					missingExports: true,
				},
			],
			/* ИДЕАЛЬНАЯ сортировка импортов */
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
					pathGroups: [
						{
							pattern: '@/components/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '@/hooks/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '@/utils/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '@/types/**',
							group: 'type',
							position: 'after',
						},
					],
					pathGroupsExcludedImportTypes: ['type'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],

			/* React Hooks */
			'react-hooks/exhaustive-deps': 'warn',

			/* Prettier интеграция */
			'prettier/prettier': 'error',
		},
	},
	{
		ignores: ['node_modules/**', '.next/**', 'build/**', 'out/**'],
	},
])
