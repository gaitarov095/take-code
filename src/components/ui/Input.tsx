import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';

type InputProps = {
	width: number;
	height: number;
	value: string; // Переносим стейт под контроль родителя
	onChange: (val: string) => void;
	iconColor?: string;
	rounded?: number;
	placeholder?: string;
	placeholderColor?: string;
	otherClass?: string; // Сделали необязательным
};

export const Input = ({
	width,
	height,
	value,
	onChange,
	iconColor = '#64748b',
	rounded,
	placeholder,
	placeholderColor,
	otherClass,
}: InputProps) => {
	// Состояние активности крестика зависит исключительно от наличия текста
	const isActive = value?.length > 0;

	return (
		<div className='flex items-center justify-center relative'>
			<input
				className={cn(
					'bg-[#090f22] border border-[#22293d] text-white text-[16px] pl-11 pr-11 focus:outline-none focus:ring-[#343a4c] focus:border-[#343a4c] max-lg:text-[14px]',
					otherClass,
				)}
				style={{
					width: `${width}px`,
					height: `${height}px`,
					borderRadius: `${rounded}px`,
					// Передаем кастомный цвет плейсхолдера через CSS-переменную, если он есть
					opacity: 1,
					...((placeholderColor
						? { '--placeholder-color': placeholderColor }
						: {}) as React.CSSProperties),
				}}
				// Добавь в глобальный CSS или стили компонента поддержку переменной для placeholder,
				// либо Tailwind подхватит стандартный текст, если цвет не передан.
				onChange={e => onChange(e.target.value)}
				type='text'
				value={value}
				placeholder={placeholder || 'Search...'}
			/>

			<div className='absolute left-4 flex items-center justify-center'>
				<Search
					style={{ color: iconColor }} // Исправлен кастомный цвет иконки
					className='cursor-pointer hover:text-white transition-colors'
					size={18}
				/>
			</div>

			<div className='absolute right-4 flex items-center justify-center'>
				<X
					className={cn(
						'text-[#64748b] cursor-pointer hover:text-white transition-colors',
						isActive ? 'visible opacity-100' : 'invisible opacity-0',
					)}
					size={18}
					onClick={() => onChange('')} // Быстрый сброс
				/>
			</div>
		</div>
	);
};