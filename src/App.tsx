import './App.css'
import HomeView from './views/HomeView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element={<HomeView />} />
       </Routes>
     </Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
      </div>
    </>
  )
}

export default App
