import React, { ComponentType } from 'react';
import './App.css';
import NavHeader from './navigation';
import SidePanel from './side-panel';

//Sexy Notion mock
//left-side panel
//draggable list (library)
//local storage
//database for notes to persist data

const App: ComponentType = () => {

  return (
    <>
      <NavHeader/>
      <div className="App">
        <SidePanel />
      </div>
    </>
  );
}

export default App;
