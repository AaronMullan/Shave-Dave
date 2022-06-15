import React, { useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../pix/2022-logo-fullscreen.JPG";
import odesaLogo from "../pix/odesa-logo-trans.png";
import hlmsLogo from "../pix/hlms-trans.png";
import heroImg from "../pix/hero.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(props) {
    const {changeViewHandler, view} = props;

    useEffect(() => {
        document.querySelector(`.active`).classList.toggle("active");
        document.querySelector(`#${view}-tab`).classList.toggle("active");
    }, [view])

    return (
        <>
            <Navbar className="sticky-top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt="Shave Dave Covid-19 Relief"
                            className="header-image"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link id="donate-tab" onClick={() => changeViewHandler("donate")} className="active" >Donate</Nav.Link>
                        <Nav.Link id="event-tab" onClick={() => changeViewHandler("event")}>Live Event</Nav.Link>
                        <Nav.Link id="about-tab" onClick={() => changeViewHandler("about")}>About</Nav.Link>
                        <Nav.Link id="chart-tab" onClick={() => changeViewHandler("chart")}>Chart View</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img id="hero-img" src={heroImg} />
            {/* <div id="hero-img"></div> */}
            <h1>A fundraiser event to benefit</h1>
            <div className="benefit-logos">
                <a id="odesa" href="https://www.baltimoreodesa.org/" target="_blank" rel="noopener noreferrer">
                    <img className="charity-logo" src={odesaLogo} alt="Baltimore Sister City Odesa Logo" />
                </a>
                <a id="hlms" href="https://www.bmoremainstreet.com/home" target="_blank" rel="noopener noreferrer">
                    <img className="charity-logo" src={hlmsLogo} alt="Hamilton Lauraville Main Street Logo" />
                </a>
            </div>
        </>
    );
}
