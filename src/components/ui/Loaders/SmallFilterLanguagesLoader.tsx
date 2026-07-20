export const SmallFilterLanguagesLoader = () => {
	return (
		<div className="flex flex-col gap-3 mt-3">
			{[...Array(3)].map((_, index) => (
				<div
					key={index}
					className='w-full h-13.5 rounded-2xl bg-gray-400 animate-pulse'
				></div>
			))}
		</div>
	);
};
