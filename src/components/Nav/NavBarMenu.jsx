import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './SocialMedia';
import Socialmedia from './SocialMedia';
import './NavBarMenu.css'

export default function NavBarMenu() {
    return (
        <div className="row">
        
        <a id="logo-container" href="#footer" class="brand-logo">Dean E. Warren</a> 
            <ul class="right hide-on-med-and-down">
                <Socialmedia />
                <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#portfolio" class="nav-link">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="#footer" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    )
}
