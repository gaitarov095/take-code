import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				title: 'var(--title-color)',
				textColor: 'var(--text-color)',
				line: 'var(--line-color)',
				input: {
					bg: 'var(--input-bg-color)',
					border: 'var(--input-border-color)',
					placeholder: 'var(--input-color)',
				},
				button: {
					bg: 'var(--button-bg-color)',
					border: 'var(--button-border-color)',
				},
			},
			backgroundImage: {
				'button-linear': 'var(--button-linear)',
			},
			fontFamily: {
				jetbrains: ['JetBrainsMonoNerd', 'monospace'],
			},
		},
	},
	plugins: [],
} satisfies Config;