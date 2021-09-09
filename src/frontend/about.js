import React from "react";

import archerPic from "../images/archer-lake.jpg";
import javascript from "../images/javascript.svg";
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import less from "../images/less.svg";
import bootstrap from "../images/bootstrap4.svg";
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import node from "../images/nodejs.svg";
import express from "../images/express.svg";
import knex from "../images/knex.svg";

function About() {
  return (
    <section className="About" id="about-section">
      <h2>About</h2>
      <div className="profile">
        <img className="archer-lake" src={archerPic} alt="dog" align="right" />
        <p className="summary">
          Hello, I'm Jordan. A full stack engineer who is passionate about
          technology and its application for solving problems. A team-oriented
          individual with the capability to learn and work independently when
          needed. Constantly trying to better myself as a person, problem solver
          and engineer.
        </p>
      </div>

      <div className="tech-stack">
        <h3>Technical Skills</h3>
        <div class="languages">
          <h4>Languages</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS/TS</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>
        <div class="frameworks-libraries">
          <h4>Frameworks/Libraries</h4>
          <ul class="frontend">
            <li>Angular</li>
            <li>React</li>
            <li>Redux</li>
            <li>LESS/SASS</li>
          </ul>
          <ul class="backend">
            <li>Spring</li>
            <li>NodeJS</li>
            <li>Express</li>
          </ul>
        </div>
        {/* <div className="skills">
          <div className="skill">
            <img src={javascript} alt="javascript" />
            <h4>Javascript</h4>
          </div>

          <div className="skill">
            <img src={html} alt="html5" />
            <h4>HTML5</h4>
          </div>

          <div className="skill">
            <img src={css} alt="css3" />
            <h4>CSS3</h4>
          </div>

          <div className="skill">
            <img src={less} alt="less" />
            <h4>LESS/SASS</h4>
          </div>

          <div className="skill">
            <img src={bootstrap} alt="bootstrap4" />
            <h4>Bootstrap</h4>
          </div>

          <div className="skill">
            <img src={react} alt="react" />
            <h4>React</h4>
          </div>

          <div className="skill">
            <img src={redux} alt="redux" />
            <h4>Redux</h4>
          </div>

          <div className="skill">
            <img src={node} alt="nodejs" />
            <h4>Node</h4>
          </div>

          <div className="skill">
            <img src={express} alt="express" />
            <h4>Express</h4>
          </div>

          <div className="skill">
            <img src={knex} alt="knex" />
            <h4>Knex</h4>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
