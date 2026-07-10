import React from 'react'

import { Search, X } from 'lucide-react';

type InputProps = {
	width: string;
	height: string;
	iconColor?: string;
	rounded?: number;
	placeholder?: string;
	placeholderColor?: string;
}

export const Input = ({ width, height, iconColor, rounded, placeholder, placeholderColor }: InputProps) => {
	const [active, setActive] = React.useState<boolean>(false);
	const [value, setValue] = React.useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setValue(inputValue);

		if (inputValue !== '') {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	const handleClearInput = () => {
		setValue('');
		setActive(false);
	};
	return (
		<div className='flex items-center justify-center relative'>
			<input
				className={`bg-[#090f22] border border-[#22293d] ${width} ${height} rounded-${rounded}xl text-white text-[16px] pl-11 focus:outline-none  focus:ring-[#343a4c] focus:border-[#343a4c] placeholder:text-${placeholderColor || '#64748b'} max-lg:text-[14px]`}
				onChange={handleInputChange}
				type='text'
				value={value}
				placeholder={placeholder || 'Search...'}
			/>
			<div className='absolute left-4'>
				<Search
					className={`text-[${iconColor}] cursor-pointer hover:text-white`}
					size={18}
				/>
			</div>
			<div className='absolute right-4'>
				<X
					className={`${active ? 'visible' : 'hidden'} text-[#64748b] cursor-pointer hover:text-white`}
					size={18}
					onClick={handleClearInput}
				/>
			</div>
		</div>
	);
};
