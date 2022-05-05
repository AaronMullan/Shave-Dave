import React, { useState } from "react";
import Header from "./components/Header"
import HomeTabs from "./components/HomeTabs";
import DonateView from "./components/DonateView";
import EventView from "./components/EventView";
import Footer from "./components/Footer"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import AboutPage from "./about-page.js";

function App() {
  const [ view, changeView ] = useState("donate");
  
  function changeViewHandler(pageName) {
    changeView(pageName);
  }

  return (
    <div className="App">
      <Header />
      <div className="body">
        <main role="main">
          <HomeTabs changeViewHandler={changeViewHandler} />
          {view === "donate" ? <DonateView /> : <EventView />}
        </main>
      </div>
      <Footer />
    </div>
  );
  // }
}

export default App;
