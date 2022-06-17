import React from "react";
import odesaLogo from "../pix/odesa-logo-trans.png";
import hlmsLogo from "../pix/hlms-trans.png";
import heroImg from "../pix/hero.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingView({changeViewHandler}) {

    return (
        <>
            <img id="hero-img" src={heroImg} alt="Dave getting shaved" />
            <h1>A fundraiser event to benefit</h1>
            <div className="benefit-logos">
                <a id="odesa" href="https://www.baltimoreodesa.org/" target="_blank" rel="noopener noreferrer">
                    <img className="charity-logo" src={odesaLogo} alt="Baltimore Sister City Odesa Logo" />
                </a>
                <a id="hlms" href="https://www.bmoremainstreet.com/home" target="_blank" rel="noopener noreferrer">
                    <img className="charity-logo" src={hlmsLogo} alt="Hamilton Lauraville Main Street Logo" />
                </a>
            </div>

            <h2>What's New</h2>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShaveDaveBmore&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3467280413296363" width="340" height="500" style={{border:"none",overflow:"hidden",margin:"0 auto",width:"340px"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

            <h1>How should we Shave Dave?</h1>
            <ol>
                <li>Learn <button className="landing-buttons" onClick={() => changeViewHandler("about")}>about Shave Dave</button> and the charities we're helping this year</li>
                <li><button className="landing-buttons" onClick={() => changeViewHandler("donate")}>Donate</button> to your favorite beardo</li>
                <li>Shave the Date: the <button className="landing-buttons" onClick={() => changeViewHandler("event")}>live Shave event</button> is Saturday, June 25</li>
                <li>Visit our <button className="landing-buttons" onClick={() => changeViewHandler("sponsors")}>Sponsors</button></li>
                <li>Keep watching <button className="landing-buttons" onClick={() => changeViewHandler("chart")}>the chart</button> and give your favorite beardo a boost to keep it on top</li>
            </ol>

        </>
    );
}
