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

	const resetInput = () => {
		setNoteInput('');
	}

	return (
		<>
			{!addClicked &&
				<AddNoteContainer
					onClick={() => {
						toggleAddClicked();
					}}
				>
					Add Note
					<PlusSignWrapper>
						<BsPlusSquare/>
					</PlusSignWrapper>
				</AddNoteContainer>
			}
			{addClicked &&
				<AddNoteContainer>
					<form
						onSubmit={() => {
							addNote(noteInput);
							toggleAddClicked();
							resetInput();
						}}
					>
						<AddNoteInput
							type="text"
							value={noteInput}
							onChange={handleNoteInput}
						/>
					</form>
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
