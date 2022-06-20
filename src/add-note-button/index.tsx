import React, { ComponentType, useState } from 'react';
import { AddNoteButtonWrapper, PlusSignWrapper, AddNoteInput } from './styles.css';
import { BsPlusSquare } from 'react-icons/bs';
import { setFocus } from '../utils';

const AddNoteButton: ComponentType<AddNoteButtonProps> = ({ addNote }) => {

	const [addClicked, setAddClicked] = useState<boolean>(false);
	const [noteInput, setNoteInput] = useState<string>('');

	const toggleAddClicked = () => {
		setAddClicked(!addClicked);
	}

	const handleNoteInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
		setNoteInput(e.target.value);
	}

	const resetNoteInput = () => {
		setNoteInput('');
	}

	const focusInput = () => {
		toggleAddClicked();
		setFocus('add-note-input');
	}

	return (
		<>
			{addClicked ?
				<AddNoteButtonWrapper>
					<form
						onSubmit={() => {
							addNote(noteInput);
							toggleAddClicked();
							resetNoteInput();
							setFocus('add-note-button');
						}}
					>
						<AddNoteInput
							id='add-note-input'
							type="text"
							placeholder='Add note here'
							value={noteInput}
							onChange={handleNoteInput}
						/>
					</form>
				</AddNoteButtonWrapper>
			:
				<AddNoteButtonWrapper
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							focusInput();
						}
					}}
					id='add-note-button'
					onClick={focusInput}
				>
					Add Note
					<PlusSignWrapper>
						<BsPlusSquare/>
					</PlusSignWrapper>
				</AddNoteButtonWrapper>
			}
		</>
	)
}

/**
* @interface AddNoteButtonProps
* @member addNote Function that passes input note string up to parent
*/
interface AddNoteButtonProps {
	addNote: (note: string) => void;
}

export default AddNoteButton;
