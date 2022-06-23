import { ComponentType, useCallback, useEffect, useState } from 'react';
import NavHeader from './navigation';
import NotePage from './note-page';
import SidePanel from './side-panel';
import { MainContainer, NoteAreaApp, SidePanelApp } from './styles.css';
import { v4 as uuid } from 'uuid';
import { exampleData } from './exampleData';
import axios from 'axios';
import { Note } from './types';
import { reorder } from './utils';
import { DropResult } from 'react-beautiful-dnd';

const App: ComponentType = () => {

  const [notes, setNotes] = useState<Note[]>(exampleData);
  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false);
  const [deletedNote, setDeletedNote] = useState<Note | null>(null);

  const toggleNoteOpen = () => {
    setIsNoteOpen(!isNoteOpen);
  }

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

	const removeNote = (noteId: string) => {
		const updatedNotes = notes.filter(note => note.id !== noteId);
		setNotes([...updatedNotes]);
    const delNote = notes.filter(note => note.id === noteId);
    setDeletedNote(delNote as unknown as Note);
	}

  return (
    <>
      <NavHeader />
      <MainContainer>
        <SidePanelApp>
          <SidePanel
            notes={notes}
            addNote={addNote}
            onDragEnd={onDragEnd}
            toggleNoteOpen={toggleNoteOpen}
            removeNote={removeNote}
          />
        </SidePanelApp>
        {
        isNoteOpen
          && !deletedNote
          && <NoteAreaApp>
                <NotePage />
             </NoteAreaApp>
        }
      </MainContainer>
    </>
  );
};

export default App;
