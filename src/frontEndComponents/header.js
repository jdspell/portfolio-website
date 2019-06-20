import React from 'react';

function Header() {
    return (
        <header>
            <div id="particles-js">
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
                
            </div>
        </header> 
    );
}

export default Header;