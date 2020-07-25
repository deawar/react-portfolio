// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import About from './About';
//import NavBarMenu from '../Nav';
import Frameworks from './Frameworks';
import Portfolio from './Portfolio';
import 'materialize-css';
import M from 'materialize-css';

const Parallax = () => {
    useEffect(() => {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    }, []);

    return (
        <>
           
            <div className="parallax-container">
                <div className="parallax">
                    <img src="./Assets/Images/PB190257.webp" alt="parallax_1" />
                </div>
                <div className="section white">
                
                </div>
                <h3 className="header center teal-text text-lighten-4">Get to Know Me</h3>
                    <p className="header col s12 light">Dean's Design Work</p>
            </div>
            <div>
            <About />
            </div>
            <div className="parallax-container valign-wrapper">
                <div className="parallax">
                    <img src="./Assets/Images/Whitwell 2.png" alt="parallax_2" />
                </div>
                    <Frameworks />
            </div>
            <div className="section white">
                <div className="row">
                <Portfolio /> 
                </div>
            </div>
            <div className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                        <h5 className="header col s12 light">Dean is a Full Stack Developer ready to build your next "Killer Application".</h5>
                        </div>
                        <div className="row center">
                        <a target="_blank" rel="noopener noreferrer" href="./Assets/Dean WarrenResumeJuly20.pdf" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 hoverable">See Resume</a>
                        </div>
                    </div>
                </div>
                <div className="parallax">
                    <img src="./Assets/Images/Whitwell1.png" alt="Unsplashed background img 3"/>
                </div>
            </div>
        </>    
    )
};

export default Parallax;