import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import AppLogo from "../assets/logo.svg";
import axios from 'axios';
import constants from '../utils/constants.json'

function MovieOverview() {
  const {API_KEY, API_URL, URL_IMAGE} = constants

  const { id } = useParams([]);
  const [movieData, setMovieData] = useState({})
  
  const fetchMovieOverview = async () => {
    const getMovieData = { method: 'GET', url: `${API_URL}/movie/${id}`,
      params: { api_key: API_KEY, language: 'es-MX'},
    };
      axios
        .request(getMovieData)
        .then(function (response) {
          console.log(response.data)
          setMovieData(response.data)
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    useEffect(() => {
      fetchMovieOverview()
    }, []);


  return (
    <>
    <header className="App-header">
        <span>
          <Link to='../pages/content'>
          <img src={AppLogo} alt="Logo" className="App-logo" />
          </Link>
        </span>
        <div className="App-back">
          <span>
            <Link role="button" to="/">
              Cerrar Sesión
            </Link>
          </span>
        </div>
      </header>
    <div className="mv-content">
        <div>
          <img
            alt="Backdrop Pelicula"
            src={`${URL_IMAGE}${movieData.backdrop_path}`}
          />
        </div>
        <div>
          <img
            alt='Poster Pelicula'
            src={`${URL_IMAGE}${movieData.poster_path}`}
          />
        </div>
        <h1>{movieData.title}</h1>
        <h2>Calificación {movieData.vote_average}</h2>
        <h3>{movieData.release_date}</h3>
        <h4>{movieData.runtime} min</h4>
        <h3>{movieData.tagline}</h3>
        <p>{movieData.overview}</p>
    </div>
    <footer className="app-footer">
        <span>
          <img src={AppLogo} alt="Logo" className="logo-footer" />
          <div className="info-footer">
            <span>Conoce más sobre nosotros</span>
            <span>Términos de uso</span>
            <span>Privacidad</span>
          </div>
        </span>
      </footer>
  </>
  )
}

export default MovieOverview;