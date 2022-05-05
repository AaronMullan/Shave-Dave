import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeTabs(props) {
    const {changeViewHandler} = props;

    return (
        <nav className="nav nav-pills nav-justified">
            <button className="nav-link active" aria-current="page" onClick={() => changeViewHandler("donate")} >Donate</button>
            <button className="nav-link" onClick={() => changeViewHandler("event")} >Live Shave Event</button>
            <button className="nav-link" onClick={() => changeViewHandler("about")} >About</button>
        </nav>
    )
}
