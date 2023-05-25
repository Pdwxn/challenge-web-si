import React from "react";
import "./MovieCard.css";

function MovieCard({movies, basePathImage}) {

  return (
    <>
      {movies && movies.map((movie, index) => (
        <article key={index} className="mv-card">
          <section className="mv-posterhvr">
            <img
              className="mv-poster"
              alt="Poster pelicula"
              src={`${basePathImage}${movie.poster_path}`}
            />
            <div>
              <h2 className="mv-title">{movie.title}</h2>
              <h4 className="mv-relase">{movie.relase_date}</h4>
            </div>
          </section>
        </article>
      ))}
    </>
  );
}

export default MovieCard;
