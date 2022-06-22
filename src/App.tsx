import { ComponentType, useState } from 'react';
import NavHeader from './navigation';
import NotePage from './note-page';
import SidePanel from './side-panel';
import { MainContainer, NoteAreaApp, SidePanelApp } from './styles.css';

const App: ComponentType = () => {

  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false);

  const toggleNoteOpen = () => {
    setIsNoteOpen(!isNoteOpen);
  }

  return (
    <>
      <NavHeader />
      <MainContainer>
        <SidePanelApp>
          <SidePanel toggleNoteOpen={toggleNoteOpen} />
        </SidePanelApp>
        {isNoteOpen &&
          <NoteAreaApp>
            <NotePage />
          </NoteAreaApp>
        }
      </MainContainer>
    </>
  );
};

export default App;
