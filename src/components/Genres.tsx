import "./Genres.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Genres(props) {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const genreId = props.genreId;

  useEffect(() => {
    (async function getMoviesData() {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
      await axios
        .get(url)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [genreId, API_KEY]);

  async function getMoviesData() {
    const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    setMovieDetails(response.data);
  }
  return (
    <>
      <div className="movies-container">
        <div className="movies-list">
          <ul>
            {movies.map((movie) => (
              <div key={movie.id}>
                <li key={movie.id}>{movie.title}</li>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                ></img>
                <a onClick={() => getMoviesData()}>More Details</a>
              </div>
            ))}
          </ul>
        </div>
        {movieDetails && (
          <div className="menu-details">
            <h1>{movieDetails.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <p>{movieDetails.overview}</p>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>Rating: {movieDetails.vote_average}</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Genres;
