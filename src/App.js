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
      <body>
      <main role='main'>
        <div className="Container">
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalA"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalB"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalC"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalD"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalE"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalF"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalG"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="QuarterFinalH"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="SemiFinalA"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="SemiFinalB"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="SemiFinalC"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="SemiFinalD"/>
          <Matchup hometeam={teams.ronswanson} awayteam={teams.lemmy} id="Final"/>
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
