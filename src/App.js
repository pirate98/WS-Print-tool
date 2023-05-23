import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Selection from './components/Pages/Selection';
import Settings from './components/Pages/DOS/Settings';
import SettingsWin from './components/Pages/Windows/SettingsWin';
import CommonHeader from './components/Common/CommonHeader';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Selection />
    },
    {
      path: "/Dossettings",
      element: <Settings />
    },
    {
      path: "/windowsettings",
      element: <SettingsWin />
    },
  ]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <CommonHeader />
        <RouterProvider router={router} />
      </div>
    </DndProvider>
  );
}

export default App;
