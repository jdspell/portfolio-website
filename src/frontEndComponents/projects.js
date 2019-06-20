import React from 'react';

import mentrMatch from "../images/mentrMatch.png";
import worther from "../images/worther.png";

function Projects() {
    return (
        <section class="Projects" id='projects-section'>

            <h2>Projects</h2>
            <h3>Click on a project link to learn more.</h3>

            <div class="portfolio">

                <div class="project">
                    <img class="" src={mentrMatch} alt="mentrMatch" />

                    <h3>MentrMatch</h3>
                    
                    <a href="https://mentrmatch.netlify.com/" >
                        https://mentrmatch.netlify.com/
                    </a>

                    <a href="https://github.com/labs12-mentor" >
                        https://github.com/labs12-mentor
                    </a>

                    <h5>App matches mentors to students within an organization.</h5>

                    <ul>
                        <li>
                            Played the role of full-stack engineer by assisting in API/database
                            setup, redux setup, implementing Material UI and front-end logic for
                            multiple components.
                        </li>

                        <li>
                            Team of 4 developers built this app in 4 weeks.
                        </li>

                        <li>
                            Users can create organizations and invite members. User permissions are based on their
                            role in the organization such as student, mentor, manager or owner. Matches are created 
                            based on a student's mentor preference and the approval of an organization manager.
                        </li>
                    </ul>

                    <h5>TechStack: React, Redux, Material UI, Axios, Knex, Jest</h5>
                </div>


                <div class="project">
                    <img class="" src={worther} alt="worther" />
                    <h3>Worther</h3>

                    <a href="https://worther-marketing.netlify.com/" >
                        https://worther-marketing.netlify.com/
                    </a>

                    <a href="https://github.com/appraisers-bff/Frontend-Architects" >
                        https://github.com/appraisers-bff/Frontend-Architects
                    </a>

                    <h5>App provides an estimate of a home's value in LA.</h5>
                    
                    <ul>
                        <li>
                            Took on role of Frontend engineer for construction of appraisal app by implementing user 
                            authentication, created layout of user profile and styled application
                        </li>

                        <li>
                            Team of 3 developers and 2 data scientists built this app in 4 days.
                        </li>

                        <li>
                            Users generate home estimates, which can be saved to a user's profile. Previous 
                            estimates can be edited to retrieve a new estimate or deleted.
                        </li>
                    </ul>

                    <h5>TechStack: React, Redux, Styled Components, Reactstrap, Axios</h5>
                </div>

            </div>
        </section>
    );
}

export default Projects;