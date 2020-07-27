import React from 'react';
import 'materialize-css';
import {Row} from 'react-materialize';
import './SocialMedia';
import Socialmedia from './SocialMedia';
import './NavBarMenu.css';
import { Link, useLocation } from "react-router-dom";

export default function NavBarMenu() {
    const location = useLocation();
    return (
        <Row className="nav-wrapper">
            <a className="navbar-brand responsive-img" target="_blank" rel="noopener noreferrer" href="https://github.com/deawar" alt="Github Repo Link"></a>
            <div class="hide-on-med-and-up">
                <a href="#about" Data-activate="mobile-demo" class="col s11 button-collapse" alt="Hamburger Menu"/><i class="material-icons">menu</i><a/>
            </div>
        
        <a id="logo-container" href="#footer" className="col s6 m12 l3 center brand-logo">Dean E. Warren</a> 
            <ul class="nav-right col s6 m12 l9 hide-on-med-and-down">
                <Socialmedia />
                <li className="NavItem">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>
                <li className="NavItem">
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li clasNames="NavItem">
                    <a href="#portfolio" className="nav-link">Portfolio</a>
                </li>
                <li className="NavItem">
                    <a href="#footer" className="nav-link">Contact</a>
                </li>
                <li className="NavItem">
                    <Link
                        to="/blog"
                        className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
                    >
                        Blog
                    </Link>
                </li>

            </ul>
        </Row>
    )
}
