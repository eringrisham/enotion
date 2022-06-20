import { v4 as uuid } from 'uuid';

export const exampleData = [
	{id: uuid(), title: 'A note', imageUrl: 'placeholder.png', text: 'My first note!', date: (new Date()).toString()},
	{id: uuid(), title: 'Another note', imageUrl: 'placeholder.png', text: 'Second note', date: (new Date()).toString()}
];
