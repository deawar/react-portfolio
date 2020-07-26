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
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">wb_sunny</i></h2>
                                <h5 className="Center">RainChk</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://itsjonkelley.github.io/RainChk/"><img src="./Assets/Images/RainChk.gif" width="380" height="380" alt="RainChk Scheduler" className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/itsjonkelley/RainChk" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">RainChk Scheduler assists with planning while making sure the weather is considered.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="Center">MultiCityWeather</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://deawar.github.io/MultiCityWeather/"><img src="./Assets/Images/MultiCityWeather.webp" width="380" height="380" alt="MultiCityWeather"  className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/MultiCityWeather" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">Have you ever needed to see what the weather will be like in several cities in a given week? Well this is what MultiCityWeather was designed for. This app can do that for you quickly and easily.</p>
                            </div>
                        </Col>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">code</i></h2>
                                <h5 className="Center">Node JS CLI ReadMeGen</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/readMeGen/"><img src="./Assets/Images/ReadMeGen.gif" width="380" height="380" alt="CLI ReadMe Generator"  className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/readMeGen/" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">A tool for the busy developer, ReadMe Gen is a Node JS CLI tool to quickly render a ReadMe to include in your GitHub repository that will include your collaborators, module dependencies, and include at least one badge in your ReadMe. This program will also prompt you for a license for your project.</p>
                            </div>
                        </Col>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">assignment</i></h2>
                                <h5 className="Center">Web Based NoteTaker</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://still-headland-57233.herokuapp.com/"><img src="./Assets/Images/noteTaker.webp" width="380" height="380" alt="Web Based NoteTaker"  className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/readMeGen/" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">Another Node JS based tool that allows the busy user to make notes available anywhere on their local network.This app uses persistent storage to keep track of the user's information.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">fitness_center</i></h2>
                                <h5 className="Center">Fitness Tracker</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://cryptic-tor-43629.herokuapp.com/"><img src="./Assets/Images/FitnessTracker8mb.gif" width="380" height="380" alt="Fitness Tracker"  className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/WorkOutTracker" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">A basic full stack app that uses Mongo DB and Mongoose. Built in Node JS and deployed on Heroku.</p>
                            </div>
                        </Col>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">food_bank</i></h2>
                                <h5 className="Center">Da MVC Burger App!</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://da-burger-app2020.herokuapp.com/"><img src="./Assets/Images/Da MVC Burger App!_.gif" width="380" height="380" alt="Da MVC Burger App!"  className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/deawar/DaBurgerApp" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">This fun, app demonstrates MVC principles and uses MySQL as a back-end. Plus, just look at the fun creative front-end interface. This learning project was a MySQL learning bonanza!</p>
                            </div>
                        </Col>
                        <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">brush</i></h2>
                                <h5 className="Center">Silent Auction Gallary</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://silentauctiongallery.herokuapp.com/"><img src="./Assets/Images/SilentAuctionGallery-min.gif" width="380" height="380" alt="Silent Auction Gallery"  className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ankmud01/SilentAuctionGallery" className="text-light">GitHub Repo </a>
                                </div>
                                <p className="light">Node JS based tool that allows the busy teacher to create a gallery for her students to display their artwork. notes available anywhere on their local network.This app uses MySQL storage to keep track of the user's information.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>


    )
}
