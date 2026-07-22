import { useEffect, useState } from 'react';

import { codeToHtml } from 'shiki'
import { CodeLoader } from './Loaders/CodeLoader';

type CodeBlockProps = {
    code: string;
    language: string;
};

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
	const [codeHTML, setCodeHTML] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		async function hightLightCode() {
			setIsLoading(true);
			try {
				const html = await codeToHtml(code, {
					lang: language.toLowerCase(),
					theme: 'one-dark-pro',
				});
				setCodeHTML(html);
			} catch (error) {
				console.error('Ошибка подсветки кода:', error);
			} finally {
				setIsLoading(false);
			}
		}

		hightLightCode();
	}, [code, language]);
	return (
		<div className='flex justify-center px-6 py-6 bg-[#0a1123] rounded-b-xl border border-[#222b3e] [&_pre]:bg-transparent! [&_pre]:outline-hidden'>
			{isLoading ? (
				<CodeLoader />
			) : (
				<div
					className='w-full font-jetbrains'
					dangerouslySetInnerHTML={{ __html: codeHTML }}
				/>
			)}
		</div>
	);
};