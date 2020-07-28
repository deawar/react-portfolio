import React from 'react';
import 'materialize-css';
import { Row, NavItem, Navbar } from 'react-materialize';
import './SocialMedia';
import Socialmedia from './SocialMedia';
import './NavBarMenu.css';
import { Link, useLocation, NavLink } from 'react-router-dom';

export default function NavBarMenu() {
  const location = useLocation();
  return (
    <Row className="nav-wrapper">
       
      {/* <div className="hide-on-med-and-up">
                <a href="#about" Data-activate="mobile-demo" className="col s11 button-collapse" alt="Hamburger Menu"/><i className="material-icons" aria-hidden="true">menu</i> <a/>
            </div> */}

        <Navbar className="nav-right col s6 m12 l9 hide-on-med-and-down">
            <Socialmedia />
            <NavLink to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                Home
            </NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
                About
            </NavLink>
            <NavLink to href="#portfolio" className="nav-link">
                Portfolio
            </NavLink>
            <NavLink to href="#footer" className="nav-link">
                Contact
            </NavLink>
            <NavLink to="/blog" className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}>
                Blog
            </NavLink>
        </Navbar>
    </Row>
  );
}
