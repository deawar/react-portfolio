import React from "react";
import 'materialize-css';
import NavBarMenu from "./NavBarMenu";
import {Row} from '../Grid'
//import SocialMedia from "./SocialMedia";
//import SideNavMenu from './SideNav';

function Nav() {
  return (
    <Row>
    <nav className="deep-purple darken-4" id="top" role="navigation">
      <NavBarMenu />
      {/* <SideNavMenu /> */}
      
      <div className="nav-wrapper container">
        
      </div>

    </nav>
    </Row>
  );
}

export default Nav;
