import "./Genres.css";
import axios from 'axios';
import {useEffect, useState} from "react";

function Genres (){
    const[movies, setMovies] = useState([]);
    
    useEffect(() => {
        {async function getMoviesData(){
            const response = await axios.get(`{}`)
        }}
    })














    const genreArray = [
        {genre:"Action", id:28},
        {genre:"Animation", id:16},
        {genre:"Comedy", id:35},
        {genre:"Adventure", id:12},
        {genre:"Crime", id:80},
        {genre:"Documentary", id:99},
        {genre:"Drama", id:18},
        {genre:"Family", id:10751},
        {genre:"Fantasy", id:14},
        {genre:"History", id:36},
        {genre:"Horror", id:27},
        {genre:"Music", id:10402},
        {genre:"Mystery", id:9648},
        {genre:"Romance", id:10749},
        {genre:"Science Fiction", id:878},
        {genre:"TV Movie", id:10770},
        {genre:"Thriller", id:53},
        {genre:"War", id:10752},
        {genre:"Western", id:37}
    ];

    return (
        <>
            <div>
                <ul>
                    {genreArray.map((item) => (
                        <li>{item.genre}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Genres;