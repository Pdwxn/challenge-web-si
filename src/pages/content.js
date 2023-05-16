import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Components/movieCard";
import AppLogo from "../assets/logo.svg";
import "./content.css";

function content() {
  return (
    <section>
      <header className="App-header">
        <span>
          <img src={AppLogo} alt="Logo" className="App-logo" />
        </span>
        <div>
          <input className="search-bar" type="text" placeholder="Buscar"></input>
        </div>
        <div className="App-back">
          <span>
            <Link role="button" to="/">
              Cerrar Sesión
            </Link>
          </span>
        </div>
      </header>
      <div className="flex-container">
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
        <span className="flex-child">
          <MovieCard></MovieCard>
        </span>
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
    </section>
  );
}

export default content;
