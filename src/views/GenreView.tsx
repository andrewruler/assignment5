import React from "react";
import { useParams } from "react-router-dom";
import Genres from '../components/Genres.tsx'
import "../components/Genres.tsx";

function GenreView() {
  return (
    <>
      <h1>Genre</h1>
      <Genres />
    </>
  );
}

export default GenreView;
