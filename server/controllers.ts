import models from '../database/models';
import Express from 'express';
import { NoteType } from '../database/models';

const controllers = {
  getAllNotes: (req: Express.Request, res: Express.Response) => {

		models.getAllNotes()
		.then((data: NoteType) => res.status(200).send(data))
		.catch((err: Error) => {
			console.log('Error fetching database notes in controller: ', err);
			res.sendStatus(404);
		});

	},

	postNote: () => {

	}
}

export default controllers;
