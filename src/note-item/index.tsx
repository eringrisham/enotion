import { ComponentType } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Note } from '../types';
import { NoteItemWrapper } from './styles.css';

const NoteItem: ComponentType<NoteItemProps> = ({ note, index }) => (
	<Draggable draggableId={note.id} index={index}>
		{provided => (
		<NoteItemWrapper
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
			{note.title}
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
}

export default NoteItem;
