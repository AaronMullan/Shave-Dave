import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <footer>
            <a
                href="https://www.instagram.com/shavedavebmore/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                id="fblogo"
                src="/assets/instagram-white.png"
                alt="instagram link"
                />
            </a>
            <a
                href="https://www.facebook.com/ShaveDaveBmore"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                id="fblogo"
                src="/assets/f_logo_RGB-White_100.png"
                alt="facebook link"
                />
            </a>
        </footer>
    );
}
