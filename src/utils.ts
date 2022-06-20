import { Note } from './types';

export const reorder = (list: Note[], startIndex: number, endIndex: number) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

export const setFocus = (elementId: string) => {
	setTimeout(() => {
		const input = document.getElementById(elementId);
		input?.focus();
	})
}
