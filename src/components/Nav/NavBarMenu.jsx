import React from 'react';
import 'materialize-css';
import { Row, Navbar } from 'react-materialize';
import './SocialMedia';
import Socialmedia from './SocialMedia';
import './NavBarMenu.css';
import { useLocation, NavLink } from 'react-router-dom';

export default function NavBarMenu() {
  const location = useLocation();
  return (
    <Row className="nav-wrapper" id="lrg-nav">
       
        <Navbar className="nav-right col s6 m12 l12 show-on-med-and-up hide-on-small-only deep-purple darken-4">
            <Socialmedia />
            <NavLink to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                Home
            </NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
                About
            </NavLink>
            <NavLink to="/portfolio" className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}>
                Portfolio
            </NavLink>
            <NavLink to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                Contact
            </NavLink>
            <NavLink to="/blog" className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}>
                Blog
            </NavLink>
        </Navbar>
    </Row>
  );
}
