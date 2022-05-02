import React from "react";
import logo from "../pix/2022-logo-fullscreen.JPG";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
    return (
        <header>
            <img
                src={logo}
                alt="Shave Dave Covid-19 Relief"
                className="header-image"
            />
        </header>
    );
}
