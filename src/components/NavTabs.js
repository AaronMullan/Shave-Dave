import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavTabs(props) {
    const {changeViewHandler, view} = props;

    useEffect(() => {
        document.querySelector(`.active`).classList.toggle("active");
        document.querySelector(`#${view}-tab`).classList.toggle("active");
    }, [view])

    return (
        <nav className="nav nav-pills nav-justified">
            <button id="donate-tab" className="nav-link active" aria-current="page" onClick={() => changeViewHandler("donate")} >Donate</button>
            <button id="event-tab" className="nav-link" onClick={() => changeViewHandler("event")} >Live Shave Event</button>
            <button id="sponsors-tab" className="nav-link" onClick={() => changeViewHandler("sponsors")} >Sponsors</button>
            <button id="about-tab" className="nav-link" onClick={() => changeViewHandler("about")} >About</button>
            <button id="chart-tab" className="nav-link" onClick={() => changeViewHandler("chart")} >Chart View</button>
        </nav>
    )
}
