import { ComponentType, useState } from 'react';
import { NoteInput } from './styles.css';

const NotePage: ComponentType = () => {

	const [noteText, setNoteText] = useState<string>('');

	return (
		<form>
			<NoteInput/>
		</form>
	)
}

export default NotePage;

