import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import AppLogo from "../assets/logo.svg";


function login() {
  return (
    <div>
      <header className="App-header">
        <span>
          <img src={AppLogo} alt="Logo" className="App-logo" />
        </span>
        <div className="App-back">
          <span>
            <Link role="button" to="/">
              Volver
            </Link>
          </span>
        </div>
      </header>
     <body className="body-login">
       <form className="form-inicio" action="" method="">
        <label className="form-top" for="usuario">
          Inicia Sesión
        </label>
        <input
          className="form-data"
          id="usuario"
          type="text"
          placeholder="Usuario"
          name="usuario"
        />
        <input
          className="form-pswrd"
          id="contraseña"
          type="password"
          placeholder="Contraseña"
          name="contraseña"
        />
        <Link to="/content">
          <button className="form-bttn" type="submit">
            Iniciar Sesión
          </button>
        </Link>
      </form>
      </body>
    </div>
  );
}

export default login;
