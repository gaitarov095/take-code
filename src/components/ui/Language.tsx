type LanguageProps = {
	language: string
};

const languagesColors = [
	{
		language: 'JavaScript',
		bg: '#102336',
		borderColor: '#18425d',
		color: '#bae6fd',
	},
	{
		language: 'Python',
		bg: '#0f262d',
		borderColor: '#164843',
		color: '#a7f3d0',
	},
	{
		language: 'Rust',
		bg: '#242321',
		borderColor: '#4f4221',
		color: '#fde68a',
	},
	{
		language: 'TSX',
		bg: '#1b1936',
		borderColor: '#342359',
		color: '#ddd6fe',
	},
	{
		language: 'SQL',
		bg: '#102336',
		borderColor: '#18425d',
		color: '#bae6fd',
	},
	{
		language: 'Go',
		bg: '#0f262d',
		borderColor: '#164843',
		color: '#a7f3d0',
	},
];

export const Language = ({ language }: LanguageProps) => {
	const languageColor = languagesColors.find(l => l.language === language);
	
	return (
		<div className='flex items-center justify-center gap-2 w-auto h-auto rounded-3xl border font-bold text-lg px-4 py-1 transition-colors duration-300 ease-in-out'
			style={{
				backgroundColor: `${languageColor?.bg}`,
				borderColor: `${languageColor?.borderColor}`,
				color: `${languageColor?.color}`,
			}}
		>
			{language}
		</div>
	);
};