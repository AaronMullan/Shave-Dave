import React from "react";
import Matchup from './matchup.js';
import Final from './matchup-final.js'
import teams from './teams/teams.js';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Shave Dave 2020</h2>
      </header>
      <body>
      <main role='main'>
        <div className="Container">
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalA"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalB"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalC"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalD"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="SemiFinalA"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="SemiFinalB"/>
          <Final hometeam={teams.ronswanson} awayteam={teams.lemmy} wildcard={teams.cleanshaven}id="Final"/>
        </div>
        </main>
      </body>
      
      <footer>
        <a
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
