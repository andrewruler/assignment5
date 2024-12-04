import './Genres.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getGenres() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      setGenres(response.data.genres);
    }
    getGenres();
  }, []);

  return (
    <div className="genres-container">
      <h1>Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} onClick = {() => console.log(genre.name)}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
