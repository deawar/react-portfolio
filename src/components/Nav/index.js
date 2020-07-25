import React from "react";
import 'materialize-css';
import NavBarMenu from "./NavBarMenu";
//import SocialMedia from "./SocialMedia";
// import SideNavMenu from './SideNav';

function Nav() {
  return (
    <>
    <nav className="white" id="top" role="navigation">
      <NavBarMenu />
      
      <div className="nav-wrapper container">
        
      </div>
      {/* <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" /> */}
      {/* <SideNavMenu /> */}
      <a className="navbar-brand" target="_blank" rel="noopener noreferrer" href="https://github.com/deawar">
        Dean Warrren
      </a>
    </nav>
    </>
  );
}

export default Nav;
