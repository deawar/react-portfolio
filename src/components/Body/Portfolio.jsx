import React from 'react';
import 'materialize-css';
import { Card, Row, Col } from 'react-materialize';

export default function Portfolio() {
    return (
        
            <div className="container">
                <div className="section">
                    <h4 className="center" id="portfolio">Portfolio</h4>
                    {/* <!--   Icon Section   --> */}
                    <div className="Row">
                        <div className="Col s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">enhanced_encryption</i></h2>
                                <h5 className="center">JavaScript Password Generator</h5>
                                <a target="_blank" rel="noopener noreferrer" href="https://deawar.github.io/jspassword_generator/"><img src="./Assets/Images/jspasswordgen.webp" width="380" height="380" alt="Password Generator" className="responsive" /></a>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/jspassword_generator" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">Have you ever needed to generate a random password with multiple charaters for your favorite website? This app can do that for you quickly and easily. Additionally, there is a convienent Copy button once you have a password that meets your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
