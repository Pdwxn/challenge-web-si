import React from "react";
import { Link } from "react-router-dom";
import "./login.css"

function login() {
  return (
    <div>
      <h1>Log In 🛩️</h1>
      <form className="form-inicio" action="" method="">
        <label className="form-top" for="usuario">
          Inicia Sesión
        </label>
        <input className="form-data" id="usuario" type="text" placeholder="Usuario" name="usuario" />
        <input
          id="contraseña"
          type="text"
          placeholder="Contraseña"
          name="contraseña"
        />
        <Link to="/content">
          <button className="form-bttn" type="submit">Iniciar Sesión</button>
        </Link>
      </form>
      <Link to="/">
        <h3>Return</h3>
      </Link>
    </div>
  );
}

export default login;
