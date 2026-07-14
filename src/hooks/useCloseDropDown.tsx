import { useEffect } from 'react';
import type { RefObject } from 'react';

import { useLocation } from 'react-router-dom';

export function useCloseDropdown(
	ref: RefObject<HTMLElement | null>,
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void,
): void {
	const location = useLocation();

	useEffect(() => {
		function handleClickOutside(event: MouseEvent): void {
			if (
				event.target instanceof Node &&
				ref.current &&
				!ref.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, isOpen, setIsOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [location, setIsOpen]);
}