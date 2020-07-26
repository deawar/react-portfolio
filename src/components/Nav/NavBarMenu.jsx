import React from 'react';
import 'materialize-css';
import {Row} from 'react-materialize';
import './SocialMedia';
import Socialmedia from './SocialMedia';
import './NavBarMenu.css';

export default function NavBarMenu() {
    return (
        <Row className="nav-wrapper">
            <a className="navbar-brand responsive-img" target="_blank" rel="noopener noreferrer" href="https://github.com/deawar" alt="Site Logo-Dean Warren"></a>
            <div class="hide-on-med-and-up">
                {/* <SideNavMenu /> */}
                <a href="#" Data-activate="mobile-demo" class="col s11 button-collapse" alt="Hamburger Menu"/><i class="material-icons">menu</i><a/>
            </div>
        
        <a id="logo-container" href="#footer" className="col s6 m12 l3 center brand-logo">Dean E. Warren</a> 
            <ul class="nav-right col s6 m12 l9 hide-on-med-and-down">
                <Socialmedia />
                <li className="NavItem">
                    <a href="#about" className="nav-link">About</a>
                </li>
                <li clasNames="NavItem">
                    <a href="#portfolio" className="nav-link">Portfolio</a>
                </li>
                <li className="NavItem">
                    <a href="#footer" className="nav-link">Contact</a>
                </li>
            </ul>
        </Row>
    )
}
