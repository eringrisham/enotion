import{ Note } from '../database';

export interface NoteType {
	id: number;
	name: string;
	imageUrl: string;
	text: string;
	date: string;
}

const models = {

	saveAllNotes: (notes: NoteType[]) => {
		return Promise.all(
			notes.map((note: NoteType) => (
				Note.findOneAndUpdate(
					{
						id: note.id
					},
					{
						id: note.id,
						name: note.name,
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

export default models;
