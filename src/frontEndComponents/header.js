import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-scroll';

let particlesConfig = require('../particles.json');

const Header = () => {
    return (
        <header id="intro">
            <div className="particleHeader">
                <nav className="navbar">
                    <Link
                        activeclass="active"
                        to="intro" 
                        spy={true}
                        smooth="true"
                        offset={-70}
                        duration={500}
                    >
                        Top
                    </Link>

                    <Link
                        activeclass="active"
                        to="about-section" 
                        spy={true}
                        smooth="true"
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                    
                    <Link
                        activeclass="active"
                        to="projects-section" 
                        spy={true}
                        smooth="true"
                        offset={-70}
                        duration={500}
                    >
                        Projects
                    </Link>
                    
                    <Link
                        activeclass="active"
                        to="contact-section" 
                        spy={true}
                        smooth="true"
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </nav>

                <div className="info">
                    <h1>Jordan Spell</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <button id="exploreBtn" className="exploreBtn" >
                    <Link
                        activeclass="active"
                        to="about-section" 
                        spy={true}
                        smooth="true"
                        offset={-70}
                        duration={500}
                    >
                        Explore
                        </Link>
                    </button>
                </div>
                
            </div>

            <Particles className='particles' params={particlesConfig} />
        </header> 
    );
}

export default Header;