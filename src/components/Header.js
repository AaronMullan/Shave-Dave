import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../pix/2022-logo-fullscreen.JPG";
import odesaLogo from "../pix/odesa-logo-trans.png";
import hlmsLogo from "../pix/hlms-trans.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        alt="Shave Dave Covid-19 Relief"
                        className="header-image"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">
                    <a id="odesa" href="https://www.baltimoreodesa.org/" target="_blank" rel="noopener noreferrer">
                        <img className="charity-logo" src={odesaLogo} alt="Baltimore Sister City Odesa Logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Brand href="#home">
                    <a id="hlms" href="https://www.bmoremainstreet.com/home" target="_blank" rel="noopener noreferrer">
                        <img className="charity-logo" src={hlmsLogo} alt="Hamilton Lauraville Main Street Logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Donate</Nav.Link>
                    <Nav.Link href="#link">Live Event</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Chart View</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <header>
        //     <br />
        //     <h2>A Charity Event In Support Of</h2>
        //     <div className="charity-logo-grp">
                // <a id="odesa" href="https://www.baltimoreodesa.org/" target="_blank" rel="noopener noreferrer"><img className="charity-logo" src={odesaLogo} alt="Baltimore Sister City Odesa Logo" /></a>
        //         <a id="hlms" href="https://www.bmoremainstreet.com/home" target="_blank" rel="noopener noreferrer"><img className="charity-logo" src={hlmsLogo} alt="Hamilton Lauraville Main Street Logo" /></a>
        //     </div>
        //     <h1>#shavedave2022</h1>
        // </header>
    );
}
