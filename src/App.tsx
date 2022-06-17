import React, { ComponentType } from 'react';
import NavHeader from './navigation';
import SidePanel from './side-panel';
import { SidePanelApp } from './styles.css';

//Sexy Notion mock
//left-side panel
//draggable list (library)
//local storage
//database for notes to persist data

const App: ComponentType = () => {

  return (
    <>
      <NavHeader/>
      <SidePanelApp>
        <SidePanel />
      </SidePanelApp>
    </>
  );
}

export default App;
