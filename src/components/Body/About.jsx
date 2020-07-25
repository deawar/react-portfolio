import React from 'react';
import 'materialize-css';
import './About.css';

export default function About() {
    return (
        <>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 center" id="about">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>About</h4>
                            
                            <a href="#footer" img src="./Assets/Images/IMG_5125.png" width="120" height="150" alt="headshot of Dean Warren" class="headshot left hoverable">
                            </a><p className="left-align light flow-text">Dean Warren is a Full Stack Developer with an extensive background in hardware and software. He has been building custom PC's and networking solutions since 1995, when he ran the The Shadowlands BBS in Macon, Ga. He has been a Field Tech, an Operations Manager, a level III Customer Service Liaison, an Account Manager of IT services for a major printing manufacturer, and a Clinical Nursing Informaticist on a number of new end-to-end software installations.</p>
                            <p>Dean's other life experiences include an education and career spanning 28 years in the field of nursing, which included 10 years working in a level three trauma center, a year in a diagnostic cardiac cath lab, and 4 years working as a crictical care transport RN. Dean spends his free time being with his loving family, exercising, running, attempting to do yoga, and building DIY projects using Raspberry Pi's. Dean has been an avid paraglider pilot and has traveled extensively throughout Central and South America to fly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
