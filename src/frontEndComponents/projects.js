import React from 'react';

import worther from "../images/worther.jpg";

function Projects() {
    return (
        <section class="Projects" id='projects-section'>
            <h2>Projects</h2>
            <h3>Click on a project to learn more.</h3>
            <div class="portfolio">
                <div class="project">
                    <img class="" src={worther} alt="worther" />
                    <h3>Worther</h3>
                    <p>
                        Users can create organizations and invite members. User permissions are based on their
                        role in the organization such as student, mentor, manager or owner. Matches are created 
                        based on a student's mentor preference and the approval of an organization manager.
                    </p>
                </div>


                <div class="project">
                    <img class="" src={worther} alt="worther" />
                    <h3>Worther</h3>
                    <p>
                        Home value estimate for houses in LA.
                    </p>
                </div>

                <div class="project">
                    <img class="" src={worther} alt="worther" />
                    <h3>Worther</h3>
                    <p>
                        Home value estimate for houses in LA.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Projects;