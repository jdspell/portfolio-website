import React from "react";
import { Link } from "react-scroll";

import Header from "./navbar/header";
import Particles from "./Particles";

const Home = () => {
  return (
    <header id="intro">
      <Header />
      <div className="info">
        <h1>Jordan Spell</h1>
        <h2>Full Stack Software Engineer</h2>
        <button id="exploreBtn" className="exploreBtn">
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
      <div id="particle-container">
        <Particles id="tsparticles" />
      </div>
    </header>
  );
};

export default Home;
