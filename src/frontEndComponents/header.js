import React from 'react';
import Particles from 'react-particles-js';

let particlesOptions = require('../JS/particles.json');

function Header() {
    return (
        <header>
            <Particles className='particles' params={particlesOptions}>
                <nav>
                    <a href="#" id='about' >About</a>
                    <a href="#" id='projects' >Projects</a>
                    <a href="#" id='contact' >Contact</a>
                </nav>

                <div className="info">
                    <h1>Jordan Spell</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <button id="exploreBtn" className="exploreBtn" >Explore</button>
                </div>
                
            </Particles>
        </header> 
    );
}

export default Header;