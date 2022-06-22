import { ComponentType } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Note } from '../types';
import { NoteItemWrapper } from './styles.css';

const NoteItem: ComponentType<NoteItemProps> = ({ note, index, toggleNoteOpen }) => (
	<Draggable draggableId={note.id} index={index}>
		{provided => (
		<NoteItemWrapper
			onClick={toggleNoteOpen}
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
			{note.text}
		</NoteItemWrapper>
		)}
	</Draggable>
);

/**
* @interface NoteItemProps
* @member note Object containing unique id string and note content string
* @member index Number index to track note movement
*/
interface NoteItemProps {
	note: Note;
	index: number;
	toggleNoteOpen: () => void;
}

export default NoteItem;
