import React from "react";
import Matchup from './matchup.js';
import teams from './teams/teams.js';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Shave Dave 2020</h1>
      </header>
      <body >
        <div className="Container">
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy}/>
          {/* <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy}/> */}
        </div>
      </body>
      
      <footer>
        <a
          className="App-link"
          href="https://www.bmorerestaurantrelief.org/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsor info goes in the footer
        </a>
      </footer>
    </div>
  );
}

export default App;
