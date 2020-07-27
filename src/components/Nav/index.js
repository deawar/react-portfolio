import React from "react";
import 'materialize-css';
import NavBarMenu from "./NavBarMenu";
import {Row} from '../Grid'
//import { Link, useLocation } from "react-router-dom";
//import SocialMedia from "./SocialMedia";
//import SideNavMenu from './SideNav';

function Nav() {
  // const location = useLocation();
  return (
    <Row>
      <nav className="deep-purple darken-4" id="top" role="navigation">
        <NavBarMenu />
      </nav>
    </Row>
  );
}

export default Nav;
