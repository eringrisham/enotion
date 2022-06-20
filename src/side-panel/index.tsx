import { ComponentType, useCallback, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import AddNoteButton from '../add-note-button';
import NoteList from '../note-list';
import { reorder } from '../utils';
import { SidePanelWrapper } from './styles.css';
import { v4 as uuid } from 'uuid';

const SidePanel: ComponentType = () => {

	const [notes, setNotes] = useState([{id: uuid(), content: 'A note'}, {id: uuid(), content: 'Another note'}]);

	const onDragEnd = useCallback((result: DropResult) => {
		if (!result.destination) {
			return;
		}

		if (result.destination.index === result.source.index) {
			return;
		}

		const reorderedNotes = reorder(
			notes,
			result.source.index,
			result.destination.index
		);

		setNotes(reorderedNotes);
	}, [notes]);

	const addNote = (note: string) => {
		if (!note) {
			return;
		}
		setNotes([...notes, {id: uuid(), content: note }]);
	}

	return (
		<>
			<AddNoteButton
				addNote={addNote}
			/>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="list">
				{provided => (
					<SidePanelWrapper ref={provided.innerRef} {...provided.droppableProps}>
					<NoteList notes={notes} />
					{provided.placeholder}
					</SidePanelWrapper>
				)}
				</Droppable>
			</DragDropContext>
		</>
	);
}

export default SidePanel;
