import React from "react";
import lemmy from "./Lemmy.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.bmorerestaurantrelief.org/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={lemmy} className="App-logo" alt="logo" />
        </a>
        <h3>Shave Dave 2020</h3>
        <a
          className="App-link"
          href="https://www.bmorerestaurantrelief.org/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
      </header>
    </div>
  );
}

export default App;
