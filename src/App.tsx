import './App.css';
import HomeView from './views/HomeView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element={<HomeView />} />
         <Route path='genres/:genreId' element={<HomeView />} />
       </Routes>
     </Router>
    </>
  )
}

export default App
