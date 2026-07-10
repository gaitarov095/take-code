import { useState } from "react";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Language } from "../ui/Language";
import { CodeInput } from "../ui/CodeInput";
import { UserTag } from "../ui/UserTag";
import { Button } from "../ui/Button";

import { snippetsCards, snippetsCards2, snippetsCards3 } from "../../mocks/mockData";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 40 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
} as const;

type SnippetsProps = {
	activeSnippetCategory: string;
};

export const Snippets = ({ activeSnippetCategory }: SnippetsProps) => {
	const [copied, setCopied] = useState<number>(0);

	const renderingSnippetsCards = activeSnippetCategory === 'Popular' ? snippetsCards : activeSnippetCategory === 'UI' ? snippetsCards2 : snippetsCards3;

	const copyCode = (id: number) => {
		// Находим нужный сниппет прямо в текущей активной выборке
		const currentSnippet = renderingSnippetsCards.find(s => s.id === id);

		if (currentSnippet) {
			navigator.clipboard.writeText(currentSnippet.code).then(() => {
				setCopied(id);
				setTimeout(() => setCopied(0), 2000);
			});
		}
	};

	return (
		<motion.ul
			key={activeSnippetCategory}
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-1 auto-rows-fr'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
		>
			{renderingSnippetsCards.map(snippet => (
				<motion.li
					className='w-full h-full bg-[#0b1220] border border-[#242c3b] rounded-3xl px-5 py-5 flex flex-col justify-between'
					key={snippet.id}
					variants={cardVariants}
				>
					{/* Верхняя часть карточки (Язык и звезды) */}
					<div>
						<div className='flex items-center justify-between'>
							<Language language={snippet.language} />
							<span className='flex items-center gap-1.5 text-[#cbd5e1] font-semibold'>
								<Star className='text-[#e3d07f]' size={20} />
								{snippet.stars}
							</span>
						</div>

						{/* Контент: Название и описание */}
						<div className='mt-4'>
							<h3 className='text-white font-bold text-2xl'>{snippet.title}</h3>
							<p className='text-[#94A3B8] text-[16px] font-semibold mt-1'>
								{snippet.description}
							</p>
						</div>
					</div>

					<div className='mt-3 w-full'>
						<CodeInput code={snippet.code} language={snippet.language} />
					</div>

					<div className='mt-2 pt-2 flex items-center justify-between'>
						<UserTag user={snippet.userTag} />
						<Button
							onClick={() => copyCode(snippet.id)}
							copiedStatus={snippet.id === copied}
						/>
					</div>
				</motion.li>
			))}
		</motion.ul>
	);
};