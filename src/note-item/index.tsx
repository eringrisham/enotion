import { ComponentType } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Note } from '../types';
import { NoteItemWrapper } from './styles.css';

const NoteItem: ComponentType<NoteItemProps> = ({ note, index }) => {

	// function getStyle(style: any, snapshot: any) {
	// 	if (!snapshot.isDropAnimating) {
	// 	  return style;
	// 	}
	// 	return {
	// 	  ...style,
	// 	  // cannot be 0, but make it super tiny
	// 	  transitionDuration: '0.001s',
	// 	};
	//   }

	return (
		<Draggable draggableId={note.id} index={index}>
			{(provided, snapshot) => {
				console.log('SNAPSHOT: ', snapshot);
			return (
			<NoteItemWrapper
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				// style={getStyle(provided.draggableProps.style, snapshot)}
			>
				{note.content}
			</NoteItemWrapper>
			)
			}}
		</Draggable>
	);
}

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
