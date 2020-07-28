// import React, { useState, useEffect } from 'react';
import React  from 'react';
import './SocialMedia.css';
import 'react-materialize';
import 'materialize-css';
import { NavItem } from 'react-materialize';


function Socialmedia ({ children }) {
    return(
        <div>
            <NavItem className="btn  btn-social btn-twitter" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/deawar" >
                <span className="fa fa-twitter" ></span>
            </NavItem>
            <NavItem className="btn  btn-social btn-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dean-warren-ab01468/" >
                <span className="fa fa-linkedin" ></span>
            </NavItem>
            <NavItem className="btn  btn-social btn-github" target="_blank" rel="noopener noreferrer" href="https://www.github.com/deawar" >
                <span className="fa fa-github" ></span>
            </NavItem>
            <NavItem className="btn  btn-social btn-reddit" target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/user/deawar" >
                <span className="fa fa-reddit" ></span>
            </NavItem>
        </div>
    );
}

export default Socialmedia;