import React, { ComponentType, useCallback, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import NoteList from '../note-list';
import { reorder } from '../utils';

const SidePanel: ComponentType = () => {

	const [notes, setNotes] = useState([{id: 'abc', content: 'A note'}, {id: 'def', content: 'Another note'}]);

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

	return (
	<DragDropContext onDragEnd={onDragEnd}>
		<Droppable droppableId="list">
		{provided => (
			<div ref={provided.innerRef} {...provided.droppableProps}>
			<NoteList notes={notes} />
			{provided.placeholder}
			</div>
		)}
		</Droppable>
	</DragDropContext>
	);
}

export default SidePanel;
