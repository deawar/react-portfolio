import React from 'react';
import 'materialize-css';
import NavBarMenu from './NavBarMenu';
import { Row } from '../Grid';
import { Navbar, Icon, SideNavItem } from 'react-materialize';
import * as ParaMenu from '../../Assets/Images/tumblr_mmhyirTI4m1racqmqo1_500.png';
import * as HeadShot from '../../Assets/Images/IMG_5125.png';
//import { Link, useLocation } from "react-router-dom";
//import SocialMedia from "./SocialMedia";
// import SideNavMenu from './SideNav';

function Nav() {
  // const location = useLocation();
  return (
    <Row>
      <style>
        {`
          #root > div > div {
            z-index: 99999 !important;
          }
        `}
      </style>
      <Navbar
        className="deep-purple darken-4 "
        id="top"
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
          name: 'Dean E. Warren'
      }}
    userView className="hide-on-med-and-up"
    />
     
        {/* <SideNavMenu /> */}
        <NavBarMenu />
      </Navbar>
    </Row>
  );
}

export default Nav;
