import mongoose, { Schema } from 'mongoose';
mongoose.connect('mongodb://localhost/enotion');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected to the DB!');
});

const noteSchema = new Schema({
	id: { type: String, unique : true },
	name: String,
	image_url: String,
	text: String,
	date: String,
});

export const Note = mongoose.model('Note', noteSchema);
