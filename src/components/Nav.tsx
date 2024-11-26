import './components.css'
import ReactDOM from 'react-dom/client';
import {Routes, Route, Link} from 'react-router-dom';

function Nav () {

    return (
    <nav>
        <img src="images\logo.png" alt="Cineflix logo" className ="logo"></img>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="trending.html">Trending</a></li>
            <li><a href="movies.html">Movies</a></li>
            <li><a href="tvshows.html">Tv Shows</a></li>
        </ul>
        <div className="dropdown">
            <select name = "language">
                <option value = "English">English</option>
                <option value = "Chinese">Chinese</option>
                <option value = "Tamil">Tamil</option>
                <option value = "Arabic">Arabic</option>
                <option value = "French">French</option>
                <option value = "British">British</option>
            </select>
      </div>
    </nav>
    )
}

export default Nav;
