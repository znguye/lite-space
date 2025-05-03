import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </>
  )
}

export default App
