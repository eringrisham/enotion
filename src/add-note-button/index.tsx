import React, { ComponentType, useState } from 'react';
import { AddNoteContainer, PlusSignWrapper, AddNoteInput } from './styles.css';
import { BsPlusSquare } from 'react-icons/bs';

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

	return (
		<>
			{addClicked ?
				<AddNoteContainer>
					<form
						onSubmit={() => {
							addNote(noteInput);
							toggleAddClicked();
							resetNoteInput();
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
				</AddNoteContainer>
			:
				<AddNoteContainer
					onClick={() => {
						toggleAddClicked();
						setTimeout(() => {
							const input = document.getElementById('add-note-input');
							input?.focus();
						})
					}}
				>
					Add Note
					<PlusSignWrapper>
						<BsPlusSquare/>
					</PlusSignWrapper>
				</AddNoteContainer>
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
