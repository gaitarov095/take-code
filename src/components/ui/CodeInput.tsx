import { useEffect, useState } from 'react';

import { codeToHtml } from 'shiki'
import { CodeLoader } from './CodeLoader';

type CodeInputProps = {
	code: string;
	language: string;
};

export const CodeInput = ({ code, language }: CodeInputProps) => {
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
		<div className='flex justify-center px-4 py-3 bg-[#020617b6] rounded-xl border border-[#222b3e] text-[15px] [&_pre]:bg-transparent!'>
			{isLoading ? (
				<CodeLoader />
			) : (
				<div
					className='w-full max-h-10 overflow-hidden font-jetbrains line-clamp-3 text-ellipsis whitespace-pre-wrap wrap-break-word'
					dangerouslySetInnerHTML={{ __html: codeHTML }}
				/>
			)}
		</div>
	);
};