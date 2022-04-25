import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./pix/2022-logo-fullscreen.JPG";
import AboutPage from "./about-page.js";

function App() {
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
            <h3>Join us for our 7th annual charity fund-raising show including live music and entertainment. At the end, we will SHAVE DAVE.  All proceeds go to Baltimore Sister City Odesa, the World Central Kitchen, and Hamilton-Lauraville Main Street.</h3>
            <br></br>
            <h1>#shavedave2022</h1>
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
