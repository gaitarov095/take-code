import { AzureEntraGlobalSecureAccess, Github, Gitlab, Gmail, Instagram, Telegram } from "@thesvg/react";

export const snippetsCards = [
	{
		id: 1,
		language: 'JavaScript',
		title: 'Edge auth middleware',
		description:
			'Drop-in request guard with typed session parsing and safe redirects.',
		code: `if (!session) return redirect(loginUrl)`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 2,
		language: 'Python',
		title: 'Async TTL cache',
		description:
			'Minimal decorator for expiring async function results safely.',
		code: `@ttl_cache(seconds=120)`,
		userTag: '@solo.swe',
		stars: 2,
	},
	{
		id: 3,
		language: 'Rust',
		title: 'Zero-copy parser',
		description:
			'Parse delimiter-heavy streams with clear lifetimes and tests.',
		code: `fn parse(input: &str) -> Result<Token>`,
		userTag: '@solo.swe',
		stars: 214,
	},
	{
		id: 4,
		language: 'TSX',
		title: 'Accessible pricing card',
		description:
			'Keyboard-friendly toggle, ARIA labels, and responsive tiers included.',
		code: `export const Language = () => {
	return (
		<div className='flex items-center justify-center gap-2 w-auto h-auto rounded-3xl border font-bold text-lg cursor-pointer px-4 py-1 transition-colors duration-300 ease-in-out'>
			Language
		</div>
	);
};`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 5,
		language: 'SQL',
		title: 'Query index advisor',
		description: 'Explain-plan helper for spotting missing composite indexes.',
		code: `CREATE INDEX CONCURRENTLY idx_events`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 6,
		language: 'Go',
		title: 'Bounded worker pool',
		description:
			'Drop-in request guard with typed session parsing and safe redirects.',
		code: `if (!session) return redirect(loginUrl)`,
		userTag: '@solo.swe',
		stars: 10,
	},
];

export const snippetsCards2 = [
	{
		id: 1,
		language: 'JavaScript',
		title: 'Edge auth middleware',
		description:
			'Drop-in request guard with typed session parsing and safe redirects.',
		code: `if (!session) return redirect(loginUrl)`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 2,
		language: 'Python',
		title: 'Async TTL cache',
		description:
			'Minimal decorator for expiring async function results safely.',
		code: `@ttl_cache(seconds=120)`,
		userTag: '@solo.swe',
		stars: 2,
	},
	{
		id: 3,
		language: 'Rust',
		title: 'Zero-copy parser',
		description:
			'Parse delimiter-heavy streams with clear lifetimes and tests.',
		code: `fn parse(input: &str) -> Result<Token>`,
		userTag: '@solo.swe',
		stars: 214,
	},
	{
		id: 4,
		language: 'TSX',
		title: 'Accessible pricing card',
		description:
			'Keyboard-friendly toggle, ARIA labels, and responsive tiers included.',
		code: `export const Language = () => {
	return (
		<div className='flex items-center justify-center gap-2 w-auto h-auto rounded-3xl border font-bold text-lg cursor-pointer px-4 py-1 transition-colors duration-300 ease-in-out'>
			Language
		</div>
	);
};`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 5,
		language: 'SQL',
		title: 'Query index advisor',
		description: 'Explain-plan helper for spotting missing composite indexes.',
		code: `CREATE INDEX CONCURRENTLY idx_events`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 6,
		language: 'Go',
		title: 'Bounded worker pool',
		description:
			'Drop-in request guard with typed session parsing and safe redirects.',
		code: `if (!session) return redirect(loginUrl)`,
		userTag: '@solo.swe',
		stars: 10,
	},
];

export const snippetsCards3 = [
	{
		id: 1,
		language: 'JavaScript',
		title: 'Edge auth middleware',
		description:
			'Drop-in request guard with typed session parsing and safe redirects.',
		code: `if (!session) return redirect(loginUrl)`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 2,
		language: 'Python',
		title: 'Async TTL cache',
		description:
			'Minimal decorator for expiring async function results safely.',
		code: `@ttl_cache(seconds=120)`,
		userTag: '@solo.swe',
		stars: 2,
	},
	{
		id: 3,
		language: 'Rust',
		title: 'Zero-copy parser',
		description:
			'Parse delimiter-heavy streams with clear lifetimes and tests.',
		code: `fn parse(input: &str) -> Result<Token>`,
		userTag: '@solo.swe',
		stars: 214,
	},
	{
		id: 4,
		language: 'TSX',
		title: 'Accessible pricing card',
		description:
			'Keyboard-friendly toggle, ARIA labels, and responsive tiers included.',
		code: `export const Language = () => {
	return (
		<div className='flex items-center justify-center gap-2 w-auto h-auto rounded-3xl border font-bold text-lg cursor-pointer px-4 py-1 transition-colors duration-300 ease-in-out'>
			Language
		</div>
	);
};`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 5,
		language: 'SQL',
		title: 'Query index advisor',
		description: 'Explain-plan helper for spotting missing composite indexes.',
		code: `CREATE INDEX CONCURRENTLY idx_events`,
		userTag: '@solo.swe',
		stars: 2.4,
	},
	{
		id: 6,
		language: 'Go',
		title: 'Bounded worker pool',
		description:
			'Drop-in request guard with typed session parsing and safe redirects.',
		code: `if (!session) return redirect(loginUrl)`,
		userTag: '@solo.swe',
		stars: 10,
	},
];

export const socialIconsMap: Record<
	string,
	React.ComponentType<{ className?: string }>
> = {
	GitHub: Github,
	GitLab: Gitlab,
	Telegram: Telegram,
	Instagram: Instagram,
	Gmail: Gmail,
	Website: AzureEntraGlobalSecureAccess,
};

export const socialMedias = ['GitHub', 'GitLab', 'Telegram', 'Instagram', 'Gmail', 'Website'];