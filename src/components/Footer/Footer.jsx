import React from 'react';
import './Footer.css';
import 'materialize-css';
import * as SSCC from '../../Assets/Images/SSCC-2-275x198.png';

export default function Footer() {
    return (
        <footer className="page-footer deep-purple darken-4 page-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <img className="left brandLogo" src={SSCC} width="65" height="35" alt="Unsplashed background img 1"/><h5 className="white-text">Dean E. Warren</h5>
                        <p className="Norm grey-text text-lighten-4">A highly experienced technical professional working to make technology work for you. If it causes you frustration, Dean is here to help. Dean builds websites and mobile apps. He can perform security audits and let you know where your network is most vulnerable. Contact Dean today and let him know how he can help make technology work for you!</p>


                    </div>
                    <div className="col l3 s12">
                    <ul>
                        <li><a className="white-text" href="/#top">Return to top</a></li>
                        <li><a className="white-text" href="/#about">About Dean</a></li>
                        <li><a className="white-text" href="/#portfolio">Portfolio</a></li>
                        
                    </ul>
                    </div>
                    <div className="col l3 s12">
                    <h5 className="white-text" id="footer">Connect</h5>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" className="white-text" href="https://www.ssccbogart.info">www.ssccbogart.info</a></li>
                        <li><a className="white-text" href="mailTo:deawar@gmail.com">Email</a></li>
                        <li><a className="white-text" href="tel: +1-706-521-4154">Phone: 706-521-4154</a></li>
                        
                    </ul>
                    </div>
                </div>
                </div>
                <div className="footer-copyright">
                <div className="container Norm">
                Developed by <a className="brown-text text-lighten-3" href="http://www.ssccbogart.info">Dean E. Warren &#169; 2020 </a>
                </div>
            </div>
        </footer>
    )
}
