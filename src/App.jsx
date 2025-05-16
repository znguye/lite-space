import {Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import CompassPage from './pages/CompassPage';
import SettingPage from './pages/SettingPage';
import TaskPage from './pages/TaskPage';

function App() {
  

  return (
    <>
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task" element={<TaskPage/>} />
          <Route path="/compass" element={<CompassPage />} />
          <Route path="/setting" element={<SettingPage/>} />
      </Routes>
    </>
  )
}

export default App
