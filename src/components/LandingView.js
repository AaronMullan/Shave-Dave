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
            <h2><a href="https://www.instagram.com/explore/tags/shavedave2022/" target="_blank" rel="noopener noreferrer">#shavedave2022</a></h2>

            <h2>What's New</h2>
            <iframe title="fb-page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShaveDaveBmore&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3467280413296363" width="340" height="500" style={{border:"none",overflow:"hidden",margin:"0 auto",width:"340px"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

            <h1>Dave has been shaved for 2022!</h1>
            <ol id="landing-buttons">
                <li><button onClick={() => changeViewHandler("about")}>Learn about Shave Dave</button> and the charities we're helping this year</li>
                <li><button onClick={() => changeViewHandler("donate")}>Donate to the cause</button> - we're still collecting because Ukraine still needs our support!</li>
                <li><button onClick={() => changeViewHandler("chart")}>See the Beardo vote results</button> - it was close</li>
                <li><button onClick={() => changeViewHandler("event")}>Shave the Date:</button> the live Shave event already happened but a livestream highlight reel is coming (date TBA)!  Stay tuned</li>
                <li><button onClick={() => changeViewHandler("sponsors")}>Visit our Sponsors</button> who made it all possible</li>
            </ol>
        </>
    )
}
