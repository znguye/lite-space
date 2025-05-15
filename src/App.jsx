import {Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import TaskListPage from './pages/TaskListPage';
import CompassPage from './pages/CompassPage';
import SettingPage from './pages/SettingPage';

function App() {
  

  return (
    <>
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addtask" element={<AddTaskPage />} />
          <Route path="/tasklist" element={<TaskListPage />} />
          <Route path="/compass" element={<CompassPage />} />
          <Route path="/setting" element={<SettingPage/>} />
      </Routes>
    </>
  )
}

export default App
