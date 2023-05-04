import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Components/movieCard";
import "./content.css";

function content() {
  return (
    <section>
      <header>
        <h1>Content 🍿</h1>
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
      <footer>
        <Link to="/">
          <h2>Log Out🔐</h2>
        </Link>
      </footer>
    </section>
  );
}

export default content;
