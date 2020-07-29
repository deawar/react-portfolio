import React from 'react';
import 'materialize-css';
import NavBarMenu from './NavBarMenu';
import NavTabs from './NavTabs';
import { Row } from '../Grid';
import { Navbar, Icon, SideNavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
import SideNavMenu from './SideNav';
// import * as ParaMenu from '../../Assets/Images/tumblr_mmhyirTI4m1racqmqo1_500.png';
// import * as HeadShot from '../../Assets/Images/IMG_5125.png';
//import { Link, useLocation } from "react-router-dom";
//import SocialMedia from "./SocialMedia";
// import SideNavMenu from './SideNav';

function Nav() {
  // const location = useLocation();
  return (
    <>
      <NavBarMenu />
      <SideNavMenu />
    </>
  );
}

export default Nav;
