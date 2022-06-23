import{ Note } from '../database';
import { v4 as uuid } from 'uuid';
export interface NoteType {
	id: string;
	title: string;
	imageUrl: string;
	text: string;
	date: string;
}

export const models = {

	saveAllNotes: (notes: NoteType[]) => {
		return Promise.all(
			notes.map((note: NoteType) => (
				Note.findOneAndUpdate(
					{
						id: note.id
					},
					{
						id: note.id,
						title: note.title,
						image_url: note.imageUrl,
						text: note.text,
						date: note.date,
					},
					{upsert: true}
				)
			))
		)
	},

	getAllNotes: () => {
		return Note.find({}).sort('-date').exec();
	}
}

models.saveAllNotes( [
	{id: uuid(), title: 'A note', imageUrl: 'placeholder.png', text: 'My first note!', date: (new Date()).toString()},
	{id: uuid(), title: 'Another note', imageUrl: 'placeholder.png', text: 'Second note', date: (new Date()).toString()}
]);
