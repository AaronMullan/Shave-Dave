import React, { useState, useEffect } from "react";
import Matchup from './matchup.js';
import Final from './matchup-final.js'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pix/Shave_Dave_20-BestOf_LOGO-BLUE.png';
import AboutPage from'./about-page.js';

// const apiKey = process.env.API_KEY;


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scores, setScores] = useState([]);
  useEffect(() => {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1aUpL55gR8X3l6X5Ucjx5BTiN6pPunnZW0T8YqPjd3Jc/values/Sheet1!C2:L5?key=AIzaSyBgawbsVXzM8xSh4leGzfSTeNOhQjyzCMs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setScores(result.values[1]);
        },
      )
  }, [])
  const teams = {
    monkeytail: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-02.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[0]
    },
    porn: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-03.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[1]
    },
    ron: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-04.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[2]
    },
    abe: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-05.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[3]
    },
    chester: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-06.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[4]
    },
    white: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-07.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[5]
    },
    twoface: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-08.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[6]
    },
    lemmy: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-09.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[7]
    },
    cleanshaven: {
      image: 'assets/cleanshaven.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: scores[8]
    },
    blankbeard: {
      image: 'assets/Shave_Dave_20-BestOf_BEARDS-11.png',
      href: 'https://www.bmorerestaurantrelief.org/donate',
      dollars: ''
    }
}
  if (!isLoaded) {
    return <div>...Loading...</div>
  } else {
  return (
    <div className="App">
      <header className="App-header">
      
      <img src={logo} alt="Shave Dave Covid-19 Relief" className="Header-image"/>
    
      </header>
      <div className="body">
      <main role='main'>
        <div className="Container">
          <Matchup hometeam={teams.monkeytail} awayteam={teams.porn} id="QuarterFinalA"/>
          <Matchup hometeam={teams.chester} awayteam={teams.white} id="QuarterFinalB"/>
          <Matchup hometeam={teams.ron} awayteam={teams.abe} id="QuarterFinalC"/>
          <Matchup hometeam={teams.twoface} awayteam={teams.lemmy} id="QuarterFinalD"/>
          <Matchup hometeam={teams.blankbeard} awayteam={teams.blankbeard} id="SemiFinalA"/>
          <Matchup hometeam={teams.blankbeard} awayteam={teams.blankbeard} id="SemiFinalB"/>
          <Final hometeam={teams.blankbeard} awayteam={teams.blankbeard} wildcard={''}id="Final"/>
          {/* <h3 id="total" >Total Raised: ${scores[9]}</h3> */}
          <div className="QuarterARight"></div>
          <div className="QuarterAOutput"></div>
          <div className="QuarterBRight"></div>
          <div className="QuarterBOutput"></div>
          <div className="QuarterCLeft"></div>
          <div className="QuarterCOutput"></div>
          <div className="QuarterDLeft"></div>
          <div className="QuarterDOutput"></div>
          <div className="SemiARight"></div>
          <div className="SemiAOutput"></div>
          <div className="SemiBLeft"></div>
          <div className="SemiBOutput"></div>
          <AboutPage className="stylishbutton"/>
        </div>
        </main>
      </div>
      
      {/* <footer>
        <a
          href="https://www.bmorerestaurantrelief.org/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsor info goes in the footer
        </a>
      </footer> */}
    </div>
  );
}
}


export default App;
