import {Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import TaskListPage from './pages/TaskListPage';
import CompassPage from './pages/CompassPage';

function App() {
  

  return (
    <>
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addtask" element={<AddTaskPage />} />
          <Route path="/tasklist" element={<TaskListPage />} />
          <Route path="/compass" element={<CompassPage />} />
      </Routes>
    </>
  )
}

export default App
