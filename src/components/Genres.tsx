import './Genres.css';

function Genres(props) {
  console.log(props.genreList);

  return (

    <div className="genres-container">
      <h1>Genres</h1>
      <ul>
        {   
            props.genreList.map((genre) => {
            return (
              <li key={genre.id}>{genre.genre}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Genres;
