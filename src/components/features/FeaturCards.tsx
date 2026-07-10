import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import { Code2, Star, Verified, Zap } from 'lucide-react';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15, // Теперь это честно применится ко ВСЕМ 4-м карточкам
		},
	},
};

const cardVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 30, // Чуть уменьшим шаг вылета для большей плавности
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3, // Анимация займет 0.6 секунды
			ease: 'easeOut', // Идеально плавное замедление к концу движения
		},
	},
};

const supportedLanguages = [
	{
		id: 1,
		name: 'JavaScript',
		color: '#BAE6FD',
		bg: '#38bff824',
		borderColor: '#38bff842',
	},
	{
		id: 2,
		name: 'Python',
		color: '#A7F3D0',
		bg: '#34d3992e',
		borderColor: '#34d39952',
	},
	{
		id: 3,
		name: 'Rust',
		color: '#FDE68A',
		bg: '#282a2c',
		borderColor: '#4e442a',
	},
	{
		id: 4,
		name: '+42 More',
		color: '#cbd5e1',
		bg: '#1a2437',
		borderColor: '#313b4e',
	},
];

export const FeaturCards = () => {
	return (
		<motion.div
			className='flex flex-col lg:flex-row items-stretch gap-6 w-full'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, margin: '-50px' }}
		>
			{/* ЛЕВАЯ КАРТОЧКА (1-й потомок — вылетает первым) */}
			<motion.div
				className='w-full lg:w-1/3 flex flex-col bg-linear-to-b from-[#111c31f5] to-[#0b1220f5] rounded-3xl border border-[#94a3b83e] px-6 py-6 transiton-color duration-300 ease-in-out hover:border-[#9fafc53e] hover:ring-1 hover:ring-[#9fafc53e]'
				variants={cardVariants}
			>
				<div className='flex items-center justify-center w-15 h-15 bg-[#38bff825] border border-[#38bff87a] rounded-2xl max-xl:w-13 max-xl:h-13'>
					<Code2 className='scale-130 max-xl:scale-110' color='#38BDF8' />
				</div>
				<div className='mt-8'>
					<ul className='flex flex-wrap items-center gap-2'>
						{supportedLanguages.map(language => (
							<li
								key={language.id}
								className='w-auto h-auto px-2 py-1.5 border rounded-3xl flex items-center justify-center gap-2'
								style={{
									backgroundColor: language.bg,
									borderColor: language.borderColor,
								}}
							>
								<p
									className='text-[16px] font-bold max-xl:text-sm'
									style={{ color: language.color }}
								>
									{language.name}
								</p>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='text-white font-bold text-3xl mt-6 max-xl:text-2xl'>
						Multi-language by default
					</h3>
					<p className='text-[#94A3B8] font-normal text-[18px] mt-2 max-xl:text-[16px]'>
						Discover snippets across frontend, backend, infra, data, and systems
						code—without forcing language silos.
					</p>
				</div>
			</motion.div>

			{/* ПРАВАЯ КОЛОНКА (Просто обертка, теперь не motion, чтобы не ломать очередь) */}
			<div className='w-full lg:w-2/3 flex flex-col justify-between gap-6'>
				{/* Верхний ряд ( grid-cols-1 sm:grid-cols-2 ) */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1'>
					{/* Verified patterns (2-й потомок в очереди анимации) */}
					<motion.div
						variants={cardVariants}
						className='bg-[#111c31f5] rounded-3xl border border-[#94a3b83e] px-6 py-6 flex flex-col justify-between flex-1 transiton-color duration-300 ease-in-out hover:border-[#42454e] hover:ring-1 hover:ring-[#42454e]'
					>
						<div className='flex items-center justify-center w-15 h-15 bg-[#142e3b] border border-[#1b5250] rounded-2xl'>
							<Verified size={30} color='#34d399' />
						</div>
						<div>
							<h3 className='text-white font-bold text-2xl mt-4 max-xl:text-xl'>
								Verified patterns
							</h3>
							<p className='text-[#94A3B8] font-normal text-[18px] mt-2 max-xl:text-[16px]'>
								Human-reviewed snippets highlight dependencies, edge cases, and
								safe defaults.
							</p>
						</div>
					</motion.div>

					{/* Copy in one tap (3-й потомок в очереди) */}
					<motion.div
						variants={cardVariants}
						className='bg-[#111c31f5] rounded-3xl border border-[#94a3b83e] px-6 py-6 flex flex-col justify-between flex-1 transiton-color duration-300 ease-in-out hover:border-[#42454e] hover:ring-1 hover:ring-[#42454e]'
					>
						<div className='flex items-center justify-center w-15 h-15 bg-[#152b44] border border-[#1c4c6b] rounded-2xl'>
							<Zap size={30} color='#38bdf8' />
						</div>
						<div>
							<h3 className='text-white font-bold text-2xl mt-4 max-xl:text-xl'>
								Copy in one tap
							</h3>
							<p className='text-[#94A3B8] font-normal text-[18px] mt-2 max-xl:text-[16px]'>
								Clear copy buttons, formatted code, and metadata make reuse feel
								instant.
							</p>
						</div>
					</motion.div>
				</div>

				{/* Нижняя длинная карточка (4-й потомок — вылетает последней) */}
				<motion.div
					variants={cardVariants}
					className='bg-linear-to-b from-[#38bdf821] to-[#34d3991a] rounded-3xl border border-[#94a3b83e] px-6 py-6 flex flex-col justify-between transiton-color duration-300 ease-in-out hover:border-[#42454e] hover:ring-1 hover:ring-[#42454e]'
				>
					<div className='flex items-center justify-between'>
						<div className='flex items-center justify-center w-15 h-15 bg-[#253d52] border border-[#475b6e] rounded-2xl max-xl:w-13 max-xl:h-13'>
							<Star className='scale-130 max-xl:scale-110' color='#fde68a' />
						</div>
						<p className='text-[#d9f99d] font-bold text-xl max-xl:text-[16px]'>
							98% useful
						</p>
					</div>
					<div>
						<h3 className='text-white font-bold text-3xl mt-4 max-xl:text-2xl'>
							Community signal, not vanity metrics
						</h3>
						<p className='text-[#94A3B8] font-normal text-[18px] mt-2 max-xl:text-[16px]'>
							Upvotes, saves, and implementation notes help the best snippets
							rise before you paste them into production.
						</p>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
