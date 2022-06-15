import React from "react";
import odesaLogo from "../pix/odesa-logo-trans.png";
import hlmsLogo from "../pix/hlms-trans.png";
import heroImg from "../pix/hero.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingView({changeViewHandler}) {

    return (
        <>
            <img id="hero-img" src={heroImg} />
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
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=3467280413296363&autoLogAppEvents=1" nonce="bAWFn8e1"></script>
            <div className="fb-page" data-href="https://www.facebook.com/ShaveDaveBmore" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ShaveDaveBmore" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ShaveDaveBmore">Shave Dave</a></blockquote></div>

            <h1>How should we Shave Dave?</h1>
            <ol>
                <li>Learn <a onClick={() => changeViewHandler("about")}>about Shave Dave</a> and the charities we're helping this year</li>
                <li><a onClick={() => changeViewHandler("donate")}>Donate</a> to your favorite beardo</li>
                <li>Shave the Date: the <a onClick={() => changeViewHandler("event")}>live Shave event</a> is Saturday, June 25</li>
                <li>Visit our <a onClick={() => changeViewHandler("sponsors")}>Sponsors</a></li>
                <li>Keep watching <a onClick={() => changeViewHandler("chart")}>the chart</a> and give your favorite beardo a boost to keep it on top</li>
            </ol>

        </>
    );
}
