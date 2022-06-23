import { ComponentType } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import AddNoteButton from '../add-note-button';
import NoteList from '../note-list';
import { Note } from '../types';

import { SidePanelWrapper } from './styles.css';

const SidePanel: ComponentType<SidePanelProps> = ({
	notes,
	addNote,
	onDragEnd,
	toggleNoteOpen,
	removeNote,
}) => {

	return (
		<>
			<AddNoteButton
				addNote={addNote}
			/>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="list">
				{provided => (
					<SidePanelWrapper ref={provided.innerRef} {...provided.droppableProps}>
					<NoteList
						notes={notes}
						toggleNoteOpen={toggleNoteOpen}
						removeNote={removeNote}
					/>
					{provided.placeholder}
					</SidePanelWrapper>
				)}
				</Droppable>
			</DragDropContext>
		</>
	);
}

interface SidePanelProps {
	toggleNoteOpen: () => void;
	notes: Note[];
	addNote: (note: string) => void;
	onDragEnd: (result: DropResult) => void;
	removeNote: (noteId: string) => void;
}

export default SidePanel;
