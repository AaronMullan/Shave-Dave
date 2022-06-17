import React, { useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../pix/2022-logo-fullscreen.JPG";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(props) {
    const {changeViewHandler, view} = props;

    useEffect(() => {
        document.querySelector(`.active`).classList.toggle("active");
        document.querySelector(`#${view}-tab`).classList.toggle("active");
    }, [view])

    return (
        <Navbar className="sticky-top" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => changeViewHandler("landing")} >
                    <img
                        src={logo}
                        alt="Shave Dave Covid-19 Relief"
                        className="header-image"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link id="landing-tab" onClick={() => changeViewHandler("landing")} className="active" >Home</Nav.Link>
                    <Nav.Link id="donate-tab" onClick={() => changeViewHandler("donate")} >Donate</Nav.Link>
                    <Nav.Link id="event-tab" onClick={() => changeViewHandler("event")}>June 25 Event</Nav.Link>
                    <Nav.Link id="about-tab" onClick={() => changeViewHandler("about")}>About</Nav.Link>
                    <Nav.Link id="chart-tab" onClick={() => changeViewHandler("chart")}>Chart View</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
