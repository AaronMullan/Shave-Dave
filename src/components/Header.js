import React from "react";
import logo from "../pix/2022-logo-fullscreen.JPG";
import odesaLogo from "../pix/odesa-logo-trans.png";
import hlmsLogo from "../pix/hlms-trans.png";
import wckLogo from "../pix/wck-trans.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
    return (
        <header>
            <img
                src={logo}
                alt="Shave Dave Covid-19 Relief"
                className="header-image"
            />
            <br />
            <h2>In Support Of</h2>
            <div className="charity-logo-grp">
                <a id="odesa" href="https://www.baltimoreodesa.org/" target="_blank"><img className="charity-logo" src={odesaLogo} alt="Baltimore Sister City Odesa Logo" /></a>
                <a id="hlms" href="https://www.bmoremainstreet.com/home" target="_blank"><img className="charity-logo" src={hlmsLogo} alt="Hamilton Lauraville Main Street Logo" /></a>
                <a id="wck" href="https://wck.org/" target="_blank"><img className="charity-logo" src={wckLogo} alt="World Central Kitchen Logo" /></a>
            </div>

        </header>
    );
}
