import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Feature from "../components/Feature"
import Genres from "../components/Genres";
import {Link} from "react-router-dom";
import './Homeview.css';
import {useEffect, useState} from "react";
import axios from 'axios';

function HomeView(){

    
    function shuffleArray<T>(array: T[]): T[] {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }
        return shuffledArray;
      }
      useEffect(() => {
        async function getMovies(){
            const response = await axios.get(https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY
                ``
            )
        }
      })
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Feature></Feature>
            <Footer></Footer>
        </>
    )
}
export default HomeView;