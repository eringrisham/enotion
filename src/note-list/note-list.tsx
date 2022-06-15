import React, { ComponentType } from "react";
import NoteItem from "../note-item/note-item";
import { Note } from "../types";

interface NoteListProps {
	notes: Note[];
}

const NoteList: ComponentType<NoteListProps> = ( { notes } ) => (
	<>
		{notes.map((note: Note, index: number) => (
			<NoteItem note={note} index={index} key={note.id} />
		))
	}
	</>
);

export default NoteList;
