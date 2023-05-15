import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "./assets/logo.svg";
import CardImg from "./assets/CL-es-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <img src={AppLogo} alt="Logo" className="App-logo" />
        </span>
        <div className="App-login">
          <span>
            <Link role="button" to="/login">
              Iniciar Sesión
            </Link>
          </span>
        </div>
      </header>
      <body>
        <div className="Home-card">
          <img src={CardImg} alt="img-home" className="Card-img" />
          <h1 className="Text-1">Disfruta de todo este contenido</h1>
          <p className="Text-2">Unete a la mejor plataforma de streaming</p>
          <input className="Email" type="text" placeholder="Email"></input>
          <button className="bttn-email" type="submit">
            Registrate
          </button>
        </div>
        <div>
          <p>loren ipsum</p>
        </div>
      </body>
    </div>
  );
}

export default App;
