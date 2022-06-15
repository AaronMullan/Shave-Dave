import React, { useState } from "react";
import Header from "./components/Header"
import DonateView from "./components/DonateView";
import EventView from "./components/EventView";
import AboutView from "./components/AboutView";
import ChartView from "./components/ChartView";
import LandingView from "./components/LandingView";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ view, changeView ] = useState("landing");
  
  function changeViewHandler(pageName) {
    changeView(pageName);
    // document.querySelector("#scrollAnchor").scrollTop += 100;
    // document.querySelector("#scrollAnchor").scrollIntoView();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="App">
      <Header changeViewHandler={changeViewHandler} view={view} />
      <div className="body">
        <div id="scrollAnchor"></div>
        <main id="main" role="main">
          { view === "landing" ? <LandingView changeViewHandler={changeViewHandler} /> : 
            view === "donate" ? <DonateView /> : 
            view === "event" ? <EventView /> : 
            view === "chart" ? <ChartView /> : 
            <AboutView />}
          <EmailForm />
        </main>
      </div>
      <Footer />
    </div>
  );
  // }
}

export default App;
