type languagesTProps = {
	language: string;
	icon?: string;
	background?: string;
	color?: string;
	borderColor?: string;
};

export const Language = ({ language, icon, background, color, borderColor }: languagesTProps) => {
	return (
		<div
			className='flex items-center justify-center gap-2 w-auto h-auto rounded-3xl border font-bold text-[16px] px-4 py-1 transition-colors duration-300 ease-in-out'
			style={{
				backgroundColor: `${background}`,
				borderColor: `${borderColor}`,
				color: `${color}`,
			}}
		>
			<img className='rounded-sm' width={20} src={icon} alt='icon' />
			{language}
		</div>
	);
};
