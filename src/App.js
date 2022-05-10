import React, { useState } from "react";
import Header from "./components/Header"
import HomeTabs from "./components/HomeTabs";
import DonateView from "./components/DonateView";
import EventView from "./components/EventView";
import Footer from "./components/Footer"
import { sendEmail } from "./utils";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import AboutPage from "./about-page.js";

function App() {
  const [ view, changeView ] = useState("donate");
  const [ emailMessage, updateEmail ] = useState(null);
  
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
          <div id="email-form">
            <h3>Share your email address for Shave Dave updates and news.</h3>
            <div>
              <label>email: </label>
              <input type="text" id="email-input" name="email-input" className="email-input" placeholder="enter email here"></input>
              <button type="button" className="btn btn-primary btn-email" onClick={() => sendEmail({ updateEmail })} >Submit</button>
              {/* {emailSucceeded === true ? 
              <h3>Good news, you're on our mailing list.  You'll hear from us soon.</h3>
            :
              <h3 id="email-confirm">Something went wrong.  Try again.</h3>
            } */}
            </div>
            <h3>{emailMessage}</h3>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
  // }
}

export default App;
