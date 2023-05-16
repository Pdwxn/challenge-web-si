import React from "react";
import "./MovieCard.css";


function movieCard() {
  return (
    <article className="mv-card">
      <header>
        <img className="mv-poster" alt="Poster pelicula" src="https://xl.movieposterdb.com/21_07/2021/9359796/xl_9359796_b5677f44.jpg?v=2023-01-16%2018:20:58" />
        <div>
          <strong className="mv-title">Titulo peli</strong>
          <span className="mv-descrip">Informacion peli</span>
          <span className="mv-info">ver mas...</span>
        </div>
      </header>
    </article>
  );
}

export default movieCard;
