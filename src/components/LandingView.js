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

            <h1>Shave Event Livestream</h1>
            <div className="stream-embed" style={{position:"relative"}} >
            {/* <div className="stream-embed" style={{padding:56.25% 0 0 0,position:relative}} > */}
                <iframe src="https://player.restream.io/?token=c3a0b2c6c1f545568a8c8e408d7c394c&vwrs=1" allow="autoplay" allowfullscreen frameborder="0" style={{position:"absolute",top:0,left:0,width:100+"%",height:100+"%"}} ></iframe>
                {/* <iframe src="https://player.restream.io/?token=c3a0b2c6c1f545568a8c8e408d7c394c&vwrs=1" allow="autoplay" allowfullscreen frameborder="0" style={{position:"absolute",top:0,left:0,width:100+"%",height:100+"%"}} ></iframe> */}
            </div>

            <h2>What's New</h2>
            <iframe title="fb-page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShaveDaveBmore&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3467280413296363" width="340" height="500" style={{border:"none",overflow:"hidden",margin:"0 auto",width:"340px"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

            <h1>How should we Shave Dave?</h1>
            <ol id="landing-buttons">
                <li><button onClick={() => changeViewHandler("about")}>Learn about Shave Dave</button> and the charities we're helping this year</li>
                <li><button onClick={() => changeViewHandler("donate")}>Donate to your favorite beardo</button></li>
                <li><button onClick={() => changeViewHandler("event")}>Shave the Date:</button> the live Shave event is Saturday, June 25</li>
                <li><button onClick={() => changeViewHandler("sponsors")}>Visit our Sponsors</button></li>
                <li><button onClick={() => changeViewHandler("chart")}>Keep watching the chart</button> and give your favorite beardo a boost to keep it on top</li>
            </ol>
        </>
    )
}
