import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeTabs(props) {
    const {changeViewHandler} = props;

    return (
        <nav className="nav nav-pills nav-justified">
            <a className="nav-link active" aria-current="page" href="#" onClick={() => changeViewHandler("donate")} >Donate</a>
            <a className="nav-link" href="#" onClick={() => changeViewHandler("event")} >Live Shave Event</a>
            <a className="nav-link" href="#" onClick={() => changeViewHandler("about")} >About</a>
        </nav>
    )
}
