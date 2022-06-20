import { ComponentType, useEffect } from 'react';
import NoteItem from '../note-item';
import { Note } from '../types';

const NoteList: ComponentType<NoteListProps> = ({ notes }) => {

	useEffect(() => {

	}, [notes]);

	return (
		<>
			{notes.map((note: Note, index: number) => (
				<NoteItem note={note} index={index} key={note.id} />
			))
		}
		</>
	)
};

/**
* @interface NoteListProps
* @member notes Array of objects containing unique id string and note content string
*/
interface NoteListProps {
	notes: Note[];
}

export default NoteList;
