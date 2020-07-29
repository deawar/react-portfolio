import React, { Component } from 'react';
import { SideNavItem, Icon, Navbar } from 'react-materialize';
import './SideNav.css';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Socialmedia from './SocialMedia';


class SideNavMenu extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render () {

    return (
      <div>
        <style>
        {`
          #root > div > div {
            z-index: 99999 !important;
          }
        `}
      </style>
      <Navbar
        className="deep-purple darken-4 hide-on-med-and-up"
        id="top-side-nav"
        role="navigation"
        alignLinks="right"
        brand={<a 
            className="brand-logo hide-on-med-and-up" 
            href="https://github.com/deawar" 
            target="_blank" 
            rel="noopener noreferrer" 
            alt="Github Repo Link">Dean E. Warren</a>}
        menuIcon={<Icon>menu</Icon>}
        options={{
            draggable: true,
            edge: 'left',
            inDuration: 275,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 210,
            preventScrolling: true
        }}

        >
        <SideNavItem
          let user={{
            background: 'https://www.publicdomainpictures.net/pictures/10000/velka/paragliding-11279634769TQP1.jpg',
            email: 'deawar@gmail.com',
            name: 'Dean E. Warren',
           }}
          userView className="hide-on-med-and-up"
        />
        <Link to="/home" className="hide-on-med-and-up">Home</Link>
        <Link to="/about" className="hide-on-med-and-up">About</Link>
        <Link to="/portfolio" className="hide-on-med-and-up">Portfolio</Link>
        <Link to="/contact" className="hide-on-med-and-up">Contact</Link>
        <Link to="/blog" className="hide-on-med-and-up">Blog</Link>
        <Socialmedia />
      </Navbar>
      </div>
    );
}
}

export default SideNavMenu;
