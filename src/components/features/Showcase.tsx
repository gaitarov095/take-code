import { useState } from 'react';

import { cn } from '../../utils/cn';

import { FeaturCards } from './FeaturCards';
import { Snippets } from './Snippets';

const categories = [
	{
		id: 1,
		name: 'Popular',
		color: '#bae6fd',
		bg: '#142b43',
		borderColor: '#1e5475',
	},
	{
		id: 2,
		name: 'UI',
		color: '#ddd6fe',
		bg: '#1b1936',
		borderColor: '#342359',
	},
	{
		id: 3,
		name: 'Backend',
		color: '#fde68a',
		bg: '#242321',
		borderColor: '#4f4221',
	},
];

export const Showcase = () => {
	const [active, setActive] = useState<number>(1);
	const [activeSnippetCategory, setActiveSnippetCategory] = useState<string>('Popular');

	const setActivesRules = (id: number, snippetCategory: string) => {
		setActive(id);
		setActiveSnippetCategory(snippetCategory);
	};

	return (
		<section className='w-full max-w-7xl mx-auto px-4 py-20 flex flex-col gap-24'>
			<div className='w-full flex flex-col items-center'>
				<h2 className='text-white font-extrabold text-5xl md:text-6xl text-center leading-tight'>
					Find battle-tested code <br /> without the noise.
				</h2>

				<p className='text-[#94A3B8] text-center font-normal text-lg mt-4 max-w-2xl'>
					TakeCode keeps reusable snippets organized, verified, and instantly{' '}
					copyable so teams can skip boilerplate and focus on shipping.
				</p>

				<div className='w-full mt-15'>
					<FeaturCards />
				</div>
			</div>

			<div className='w-full flex flex-col items-start'>
				<h2 className='text-white font-extrabold text-5xl md:text-6xl text-left'>
					Explore what developers <br /> are copying now.
				</h2>

				<div className='w-full flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-5'>
					<p className='text-[#94A3B8] text-left font-normal text-lg mt-4 max-w-2xl'>
						Browse reusable snippets with readable summaries, community proof,
						and clean copy controls.
					</p>

					<ul className='flex gap-3'>
						{categories.map(category => (
							<li
								key={category.id}
								className={cn(
									'flex items-center justify-center gap-2 w-auto h-auto rounded-3xl border font-bold text-lg cursor-pointer px-4 py-1 transition-colors duration-300 ease-in-out',
									active !== category.id &&
										'bg-[#1b2335] border-[#2f374a] text-[#94a3b8] hover:bg-[#131825] hover:border-[#282e3c] hover:text-[#7b8695]',
								)}
								style={
									active === category.id
										? {
												backgroundColor: `${category.bg}`,
												borderColor: `${category.borderColor}`,
												color: `${category.color}`,
											}
										: {}
								}
								onClick={() => setActivesRules(category.id, category.name)}
							>
								{category.name}
							</li>
						))}
					</ul>
				</div>

				{/* Сюда чуть позже встанет твоя сетка с 6 карточками */}
				<div className='w-full mt-8'>
					<Snippets activeSnippetCategory={activeSnippetCategory} />
				</div>
			</div>
		</section>
	);
};