import React, { useState } from "react";
import Header from "./components/Header"
import NavTabs from "./components/NavTabs";
import DonateView from "./components/DonateView";
import EventView from "./components/EventView";
import AboutView from "./components/AboutView";
import EmailForm from "./components/EmailForm";
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
          <NavTabs changeViewHandler={changeViewHandler} view={view} />
          {view === "donate" ? <DonateView /> : 
            view === "event" ? <EventView /> : 
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
