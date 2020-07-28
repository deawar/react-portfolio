// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import About from './About';
import Nav from '../Nav';
import Frameworks from './Frameworks';
import Portfolio from './Portfolio';
import './Parallax.css';
import 'materialize-css';
import M from 'materialize-css';
import * as Whitwell2 from '../../Assets/Images/Whitwell 2.png';
import * as Whitwell from '../../Assets/Images/PB190257.webp';
import * as Whitwell3 from '../../Assets/Images/Whitwell1.png';
import * as Resume from '../../Assets/Dean WarrenResumeJuly20.pdf';

const Parallax = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.parallax');
    M.Parallax.init(elements);
  }, []);

  return (
    <>
      <div className="parallax-container">
        <Nav />
        <div className="parallax">
          <img src={Whitwell} alt="parallax_1" />
        </div>
        <a
          href="#portfolio"
          id="download-button"
          className="btn-large waves-effect waves-light deep-purple darken-4 hoverable"
        >
          Design Work
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://theshadowlandsbbs.ssccbogart.info"
          id="download-button"
          className="btn-large waves-effect waves-light deep-purple darken-4 hoverable"
        >
          Just for Fun
        </a>
      </div>
      <div>
        <About />
      </div>
      <div className="parallax-container valign-wrapper">
        <div className="parallax">
          <img src={Whitwell2} alt="parallax_2" />
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
              <h5 className="header col s12 light">
                Dean is a Full Stack Developer ready to build your next "Killer
                Application".
              </h5>
            </div>
            <div className="row center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={Resume}
                id="download-button"
                download
                className="btn-large waves-effect waves-light deep-purple darken-4 hoverable"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={Whitwell3} alt="Unsplashed background img 3" />
        </div>
      </div>
    </>
  );
};

export default Parallax;
