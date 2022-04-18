import React, { useState, useEffect } from "react";
import Matchup from "./matchup.js";
import Final from "./matchup-final.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./pix/2022-logo-fullscreen.JPG";
import AboutPage from "./about-page.js";

// const apiKey = process.env.API_KEY;

function App() {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [scores, setScores] = useState([]);
  // const [scoresToo, setScoresToo] = useState([]);
  // const [scoresThree, setScoresThree] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://sheets.googleapis.com/v4/spreadsheets/1aUpL55gR8X3l6X5Ucjx5BTiN6pPunnZW0T8YqPjd3Jc/values/Sheet1!C2:L5?key=AIzaSyBgawbsVXzM8xSh4leGzfSTeNOhQjyzCMs"
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setIsLoaded(true);
  //       setScores(result.values[1]);
  //       setScoresToo(result.values[2]);
  //       setScoresThree(result.values[3]);
  //     });
  // }, []);
  // if (!isLoaded) {
  //   return <div>...Loading...</div>;
  // } else {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="Shave Dave Covid-19 Relief"
          className="Header-image"
        />
      </header>
      <div className="body">
        <main role="main">
          <div className="announcement">
            <h1><b>Shave the Date: </b>Saturday, June 25, 2022</h1>
            <br></br>
            <h2>In Person at <b>The 4500 Lot</b> at Hamilton-Lauraville Main Street, Baltimore, MD, and <b>livestreamed</b> here and on social media</h2>
            <br></br>
            <h3>Join us for a charity-raising show including live music and entertainment. At the end, we will SHAVE DAVE.  All proceeds go to Baltimore Sister City Odessa and Hamilton-Lauraville Main Street.</h3>
          </div>
        </main>
        <div className="Footer">
          <a
            href="https://www.instagram.com/shavedavebmore/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="fblogo"
              src="/assets/instagram-white.png"
              alt="instagram link"
            ></img>
          </a>
          <AboutPage className="stylishbutton" />
          <a
            href="https://www.facebook.com/ShaveDaveBmore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="fblogo"
              src="/assets/f_logo_RGB-White_100.png"
              alt="facebook link"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
  // }
}

export default App;
