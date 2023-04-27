import React from "react";
import logo from "./images/logo/pedro-orvalho-high-resolution-logo-white-on-transparent-background.png"

export default function NavBar() {
    return (
        <div className="navbar_container">
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="nav">
                <ul>
                    <li><a className="list_items" href="#BIO">bio</a></li>
                    <li><a className="list_items" href="#PROJECTS">what I do</a></li>
                    <li><a className="list_items" href="#CV">portfolio</a></li>
                    <li><a className="list_items" href="#CONTACT">contact</a></li>
                </ul>
            </div>
        </div>
    )
}