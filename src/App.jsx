import {Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TaskListPage from './pages/TaskListPage';
import CompassPage from './pages/CompassPage';

function App() {
  

  return (
    <>
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasklist" element={<TaskListPage />} />
          <Route path="/compass" element={<CompassPage />} />
      </Routes>
    </>
  )
}

export default App
