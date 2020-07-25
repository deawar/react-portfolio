// import React, { useState, useEffect } from 'react';
import React  from 'react';
import './SocialMedia.css';

// import M from 'materialize-css';


function Socialmedia ({ children }) {
    return(
        <>
            <li class="nav-item">  
                <a class="btn btn-block btn-social btn-twitter" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/deawar" >
                <span class="fa fa-twitter" ></span>
                </a>
            </li>
            <li class="nav-item">  
                <a class="btn btn-block btn-social btn-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dean-warren-ab01468/" >
                <span class="fa fa-linkedin" ></span>
            </a>
            </li>
            <li class="nav-item">  
                <a class="btn btn-block btn-social btn-github" target="_blank" rel="noopener noreferrer" href="https://www.github.com/deawar" >
                <span class="fa fa-github" ></span>
                </a>
            </li>
            <li class="nav-item">  
                <a class="btn btn-block btn-social btn-reddit" target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/user/deawar" >
                <span class="fa fa-reddit" ></span>
                </a>
            </li>
        </>
    );
}

export default Socialmedia;