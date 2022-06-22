import { ComponentType, useCallback, useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import AddNoteButton from '../add-note-button';
import NoteList from '../note-list';
import { reorder } from '../utils';
import { SidePanelWrapper } from './styles.css';
import { v4 as uuid } from 'uuid';
import { exampleData } from '../exampleData';
import axios from 'axios';
import { Note } from '../types';

const SidePanel: ComponentType<SidePanelProps> = ({ toggleNoteOpen }) => {

	const [notes, setNotes] = useState<Note[]>(exampleData);

	useEffect(() => {

		axios.get<Note[]>('http://localhost:3014/notes')
		.then(({ data }) => setNotes([...notes, ...data]))
		.catch(err => console.log('ERROR: ', err));

	}, []);

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
		setNotes([...notes, {id: uuid(), title: note , imageUrl: 'blah', text: 'meow meow meow', date: (new Date()).toString()}]);
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
					<NoteList notes={notes} toggleNoteOpen={toggleNoteOpen} />
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
}

export default SidePanel;
