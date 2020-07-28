import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'react-materialize';
import { NavItem, Navbar } from "react-materialize";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <Navbar 
      alignLinks="left"
      className="nav nav-tabs">
      <NavItem className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          to="/blog"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          to="#footer"
          className={location.pathname === "#footer" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          to="*"
          className={location.pathname === "/home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </NavItem>
    </Navbar>
  );
}

export default NavTabs;
