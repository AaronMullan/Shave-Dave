import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import DonateView from "./components/DonateView";
import EventView from "./components/EventView";
import AboutView from "./components/AboutView";
import ChartView from "./components/ChartView";
import LandingView from "./components/LandingView";
import SponsorsView from "./components/SponsorsView";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ view, changeView ] = useState("donate");
  const [ isLoading, updateLoading ] = useState(true);
  const [ loop, setLoop ] = useState();
  const [ amounts, getAmounts ] = useState({
      anchor:0,
      crab:0,
      clean:0,
      dubStache:0,
      postEvent:0
  });

  function getBeardAmount (result, beardType) {
      return result.donations.filter(data => data.beardVote === beardType).map(data => data.amount).reduce((a, b) => a + b, 0);
  }

  useEffect(() => {
      setLoop(
          setInterval(() => {
              fetch("https://shave-dave-server.herokuapp.com/api/donations/")
              .then(res => res.json())
              .then(
                  (result) => { 
                      console.log(result);
                      getAmounts({
                          clean: getBeardAmount(result, "Clean Shaven") + getBeardAmount(result, "Clean Shave"),
                          anchor: getBeardAmount(result, "Odesa Anchor"),
                          crab: getBeardAmount(result, "Bmore Crab"),
                          dubStache: getBeardAmount(result, "Double Stache"),
                          postEvent: getBeardAmount(result, "post-event")
                      });
                      updateLoading(false);
                  }
              )
          }, 1000)
      );

      return function cleanup() {
          clearInterval(loop);
      }
      // eslint-disable-next-line
  }, [amounts])
  
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
            view === "donate" ? <DonateView isLoading={isLoading} amounts={amounts} /> : 
            view === "event" ? <EventView /> : 
            view === "chart" ? <ChartView isLoading={isLoading} amounts={amounts} /> : 
            view === "sponsors" ? <SponsorsView /> : 
            <AboutView /> }
          <EmailForm />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App;
