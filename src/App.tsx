import './App.css';
import HomeView from './views/HomeView';
import GenreView from './views/GenreView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element={<HomeView />} />
         <Route path='GenreView' element={<GenreView />} />
       </Routes>
     </Router>
    </>
  )
}

export default App
