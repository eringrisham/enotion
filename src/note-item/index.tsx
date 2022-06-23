import { ComponentType, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Note } from '../types';
import { NoteItemWrapper, TrashCanWrapper } from './styles.css';
import { HiOutlineTrash } from 'react-icons/hi';

const NoteItem: ComponentType<NoteItemProps> = ({
	note,
	index,
	toggleNoteOpen,
	removeNote,
}) => {

	const [isHovered, setIsHovered] = useState<boolean>(false);

	const toggleHover = () => {
		setIsHovered(!isHovered);
	}

	return (
	<Draggable draggableId={note.id} index={index}>
		{provided => (
		<NoteItemWrapper
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			onClick={toggleNoteOpen}
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
			{note.title}
			<TrashCanWrapper>
			{isHovered && <HiOutlineTrash onClick={() => removeNote(note.id)}/>}
			</TrashCanWrapper>
		</NoteItemWrapper>
		)}
	</Draggable>
	)
};

/**
* @interface NoteItemProps
* @member note Object containing unique id string and note content string
* @member index Number index to track note movement
*/
interface NoteItemProps {
	note: Note;
	index: number;
	toggleNoteOpen: () => void;
	removeNote: (noteId: string) => void;
}

export default NoteItem;
