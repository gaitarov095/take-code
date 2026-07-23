export const ProflieAboutLoader = () => {
	return (
		<>
			<div className='flex gap-4'>
				<div className='w-25 h-25 bg-gray-400 animate-pulse rounded-3xl'></div>
				<div className='mt-2'>
					<div className='w-35 h-10 rounded-3xl bg-gray-400 animate-pulse'></div>
					<div className='w-100 h-5 rounded-3xl bg-gray-400 animate-pulse mt-3'></div>
				</div>
			</div>
			<div className='mt-5'>
				<div className='w-full h-5 rounded-3xl bg-gray-400 animate-pulse'></div>
				<div className='w-2/3 h-5 rounded-3xl bg-gray-400 animate-pulse mt-4'></div>
			</div>
			<div className='flex items-center gap-3 mt-4'>
				{[...Array(3)].map((_, index) => (
					<div
						key={index}
						className='w-27 h-8 rounded-3xl bg-gray-400 animate-pulse mt-2'
					></div>
				))}
			</div>
			<div className='w-full flex gap-4 mt-5'>
				<div className='w-full bg-gray-400 animate-pulse rounded-2xl px-4 py-11'></div>
				<div className='w-full bg-gray-400 animate-pulse rounded-2xl px-4 py-11'></div>
			</div>
		</>
	);
};