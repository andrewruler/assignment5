import HomeView from "./views/HomeView";
import GenreView from "./views/GenreView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import MovieView from "./views/MoviesView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="HomeView" element={<HomeView />}/>
          <Route path ="MoviesView" element={<MovieView />}>
            <Route path="GenreView" element={<GenreView />} />
          </Route>
          <Route path="RegisterView" element={<RegisterView />} />
          <Route path="LoginView" element={<LoginView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
