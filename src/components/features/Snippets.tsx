import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

import { Language } from '../ui/Language';
import { CodeInput } from '../ui/CodeInput';
import { UserTag } from '../ui/UserTag';
import { Button } from '../ui/Button';

import { SnippetSkeleton } from '../ui/Skeletons/SnippetSkeleton'; // <--- Импортируем скелетон

import type { snippetCard } from './Showcase';
import { supabase } from '../../utils/supabase';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08, // Сделали чуть быстрее для динамичности
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 120,
			damping: 14,
		},
	},
} as const;

type SnippetsProps = {
	snippets: snippetCard[] | null;
	activeSnippetCategory: string;
	onToggleStar: (snippetId: string, isStarred: boolean) => void;
};

export const Snippets = ({
	snippets,
	activeSnippetCategory,
	onToggleStar
}: SnippetsProps) => {
	const [copied, setCopied] = useState<string>('');

	const copyCode = async (snippetId: string) => {
		const currentSnippet = snippets?.find(s => s.id === snippetId);

		if (currentSnippet) {
			await navigator.clipboard.writeText(currentSnippet.code).then(() => {
				setCopied(snippetId);
				setTimeout(() => setCopied(''), 2000);
			});
		}

		// Вызов RPC с логированием
		const { data, error } = await supabase.rpc('increment_copied', {
			row_id: snippetId,
		});

		if (error) {
			console.error('Ошибка RPC increment_copied:', error);
		} else {
			console.log('Новое значение copied_count из БД:', data);
		}
	};

	if (snippets === null) {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-1 auto-rows-fr'>
				{Array.from({ length: 6 }).map((_, index) => (
					<SnippetSkeleton key={index} />
				))}
			</div>
		);
	}

	if (snippets.length === 0) {
		return (
			<div className='w-full h-100 flex items-center justify-center text-[#94A3B8]'>
				В категории "{activeSnippetCategory}" пока нет сниппетов.
			</div>
		);
	}

	return (
		<AnimatePresence mode='wait'>
			<motion.ul
				key={activeSnippetCategory}
				className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-1 auto-rows-fr'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				{snippets.map(snippet => (
					<motion.li
						className='w-full h-full bg-[#0b1220] border border-[#242c3b] rounded-3xl px-5 py-5 flex flex-col justify-between'
						key={snippet.id}
						variants={cardVariants}
					>
						<div>
							<div className='flex items-center justify-between'>
								<UserTag
									user={snippet.profiles?.tag || '@takecode'}
									avatar={
										snippet.profiles?.avatar_url ||
										'https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'
									}
								/>
								<Language
									language={snippet.languages?.name || 'plaintext'}
									icon={snippet.languages?.icon}
									background={snippet.languages?.background}
									color={snippet.languages?.color}
									borderColor={snippet.languages?.borderColor}
								/>
							</div>

							<div className='mt-4'>
								<h3 className='text-white font-bold text-2xl'>
									{snippet.title}
								</h3>
								<p className='text-[#94A3B8] text-[16px] font-semibold mt-1'>
									{snippet.description}
								</p>
							</div>
						</div>

						<div className='mt-3 w-full'>
							<CodeInput
								code={snippet.code}
								language={snippet.languages?.name || 'plaintext'}
							/>
						</div>

						<div className='mt-2 pt-2 flex items-center justify-between'>
							<button
								onClick={() =>
									onToggleStar(snippet.id, !!snippet.is_starred_by_user)
								}
								className='flex items-center gap-1.5 text-[#cbd5e1] font-semibold hover:opacity-80 transition-opacity cursor-pointer'
							>
								<Star
									className={
										snippet.is_starred_by_user
											? 'text-[#e3d07f] fill-[#e3d07f]' // Закрашиваем, если лайкнуто
											: 'text-[#cbd5e1]'
									}
									size={20}
								/>
								<span>{snippet.stars_count}</span>
							</button>
							<Button
								onClick={() => copyCode(snippet.id)}
								copiedStatus={snippet.id === copied}
							/>
						</div>
					</motion.li>
				))}
			</motion.ul>
		</AnimatePresence>
	);
};