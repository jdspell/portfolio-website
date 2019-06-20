import React from 'react';

import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";
import email from "../images/email.svg";

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <section className="contact-form" id='contact-section'>
                <h2>Contact</h2>
    
                <form 
                    method="post" 
                    name="contactForm" 
                    id="contactForm" 
                    role="form"
                    onSubmit={this.handleSubmit}
                >
                    <div>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
    
                    <div>
                        <textarea name="message" placeholder="Message" ></textarea>
                    </div>
    
                    <button type="submit">Send Message</button>
                </form>
    
                <div className="icons">
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