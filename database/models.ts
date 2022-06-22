import{ Note } from '../database';

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
