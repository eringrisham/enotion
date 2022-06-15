import React, { ComponentType, useCallback, useState } from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import NoteList from "../note-list/note-list";
import { Note } from '../types';

const reorder = (list: Note[], startIndex: number, endIndex: number) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

const SidePanel: ComponentType = () => {

	const [state, setNotes] = useState([{id: 'abc', content: 'A note'}, {id: 'def', content: 'Another note'}]);

	function onDragEnd(result: any) {
		if (!result.destination) {
			return;
		}

		if (result.destination.index === result.source.index) {
			return;
		}

		const reorderedNotes = reorder(
			state,
			result.source.index,
			result.destination.index
		);

		setNotes(reorderedNotes);
	}

	return (
	<DragDropContext onDragEnd={onDragEnd}>
		<Droppable droppableId="list">
		{provided => (
			<div ref={provided.innerRef} {...provided.droppableProps}>
			<NoteList notes={state} />
			{provided.placeholder}
			</div>
		)}
		</Droppable>
	</DragDropContext>
	);
}

export default SidePanel;
