import React from "react";
import { useParams } from "react-router-dom";
import "../components/Genres.tsx";
function GenreView() {
  const { genreId } = useParams();
  return (
    <>
      <h1>Genre</h1>
      <Genres genreId={parseInt(genreId || "0", 10)} />
    </>
  );
}

export default GenreView;
