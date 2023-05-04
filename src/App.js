import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello 😉</h1>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
      </header>
    </div>
  );
}

export default App;
