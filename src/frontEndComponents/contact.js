import React from 'react';

import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";
import email from "../images/email.svg";

class Contact extends React.Component {
    render() {
        return (
            <section class="contact-form" id='contact-section'>
                <h2>Contact</h2>
    
                <form method="post" name="contactForm" id="contactForm" role="form" >
                    <div>
                        <input type="text" name="name" placeholder="Name" value="" />
                    </div>
                    
                    <div>
                        <input type="email" name="email" placeholder="Email" value="" />
                    </div>
    
                    <div>
                        <textarea name="message" placeholder="Message" ></textarea>
                    </div>
    
                    <button type="submit">Send Message</button>
                </form>
    
                <div class="icons">
                    <img src={github} alt="github" />
                    <img src={linkedIn} alt="linkedIn" />
                    <img src={email} alt="email" />
                </div>
    
                <p>Jordan D. Spell © 2019</p>
            </section>
        );
    }
    
}

export default Contact;