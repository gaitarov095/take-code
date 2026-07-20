export const SmallFilterFWTagsLoader = () => {
	return (
		<div className='flex flex-wrap gap-3 my-3'>
			{[...Array(3)].map((_, index) => (
				<div
					key={index}
					className='w-20 h-8 rounded-3xl bg-gray-400 animate-pulse'
				></div>
			))}
		</div>
	);
};
