import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EventView() {
    return (
        <div id="event-view">
          <h2>Event Details</h2>
          <iframe title="eventbrite" src="https://www.eventbrite.com/e/shaveday2022-for-ukrainian-crisis-relief-saturday-june-25-2-6pm-tickets-359537284697"></iframe>
          <br></br>
          <h3>The event will also be livestreamed here and on your favorite social media platforms.  </h3>
          <br></br>
          <h2>Vendors</h2>
          <div className="vendor-logos">
          <i>Coming Soon</i>
          </div>
        </div>
    )
}
