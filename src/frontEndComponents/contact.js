import React from 'react';

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
                    <img src={"images/github.svg"} alt="github" />
                    <img src={"images/linkedin.svg"} alt="linkedIn" />
                    <img src={"images/email.svg"} alt="email" />
                </div>
    
                <p>Jordan D. Spell © 2019</p>
            </section>
        );
    }
    
}

export default Contact;