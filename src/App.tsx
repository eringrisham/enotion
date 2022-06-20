import { ComponentType } from 'react';
import NavHeader from './navigation';
import SidePanel from './side-panel';
import { SidePanelApp } from './styles.css';

const App: ComponentType = () => (
  <>
    <NavHeader/>
    <SidePanelApp>
      <SidePanel />
    </SidePanelApp>
  </>
);

export default App;
