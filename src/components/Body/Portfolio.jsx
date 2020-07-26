import React from 'react';
import 'materialize-css';
import {Row, Col} from 'react-materialize';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <>
            <div className="container">
                <div className="section">
                    <h4 className="center" id="portfolio">Portfolio</h4>
                    <Row>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">enhanced_encryption</i></h2>
                                <h5 className="Center">JavaScript Password Generator</h5>
                                <a target="_blank" rel="noopener noreferrer" href="https://deawar.github.io/jspassword_generator/"><img src="./Assets/Images/jspasswordgen.webp" alt="Password Generator"  width="380" height="380" className="responsive-img" /></a>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/jspassword_generator" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">Have you ever needed to generate a random password with multiple charaters for your favorite website? This app can do that for you quickly and easily. Additionally, there is a convienent Copy button once you have a password that meets your needs.</p>
                            </div>
                        </Col>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="Center">Work Day Scheduler</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://deawar.github.io/Work-DayScheduler/"><img src="./Assets/Images/05-third-party-apis-homework-demo.gif" width="380" height="380" alt="WorkDay Scheduler" className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/Work-DayScheduler" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">The Work Day Scheduler Application makes planning your day a breeze. This timed ToDo app will help you get a handle on your day by breaking up your tasklist into an hourly schedule.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>


    )
}
