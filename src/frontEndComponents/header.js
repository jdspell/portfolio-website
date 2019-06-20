import React from 'react';
import Particles from 'react-particles-js';

let particlesConfig = require('../JS/particles.json');

function Header() {
    return (
        <header>
            <div className="particleHeader">
                <nav className="overlay">
                    <a href="" id='about' >About</a>
                    <a href="" id='projects' >Projects</a>
                    <a href="" id='contact' >Contact</a>
                </nav>

                <div className="info overlay">
                    <h1>Jordan Spell</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <button id="exploreBtn" className="exploreBtn" >Explore</button>
                </div>
                
            </div>

            <Particles className='particles' params={particlesConfig} />
        </header> 
    );
}

export default Header;