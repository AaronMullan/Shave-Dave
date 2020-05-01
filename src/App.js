import React from 'react';
import lemmy from './lemmy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lemmy} className="App-logo" alt="logo" />
        <p>
          Shave Dave 2020
        </p>
        <a
          className="App-link"
          href="https://www.bmorerestaurantrelief.org/"
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
