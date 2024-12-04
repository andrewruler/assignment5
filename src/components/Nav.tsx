import './Nav.css'
import {Link} from 'react-router-dom';
import LanguagesDropdown from './LanguagesDropdown';

function Nav () {
    return (
    <div className = "NavWrapper">
        <nav>
            <img src="images\logo.png" alt="Cineflix logo" className ="logo"></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Trending</Link></li>
                <li><Link to="/MoviesView">Movies</Link></li>
                <li><Link to="/">Tv Shows</Link></li>
            </ul>
            <button><Link to="/RegisterView">Register</Link></button>
            <button><Link to="/signIn">Log In</Link></button>
            <LanguagesDropdown></LanguagesDropdown>
        </nav>
    </div>
    )
}

export default Nav;
