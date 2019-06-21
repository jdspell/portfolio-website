import React from 'react';
import axios from 'axios';

import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        mailBody: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const mailBody = {...this.state}
        console.log('mailBody', mailBody);
        await axios
            .post('http://localhost:5001/', mailBody)
            .then(res => {
                console.log("hello");
                console.log(res);
            });
        console.log("Sent message");

        this.setState({
            name: '',
            email: '',
            mailBody: ''
        });
    }

    render() {
        return (
            <section className="contact-form" id='contact-section'>
                <h2>Contact</h2>
    
                <div className="icons">
                    <a href="https://github.com/jdspell">
                        <img src={github} alt="github" />
                    </a>

                    <a href="https://www.linkedin.com/in/jordan-spell/">
                        <img src={linkedIn} alt="linkedIn" />
                    </a>
                </div>
                    
                <form
                    name="contactForm"
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
                        <textarea 
                            name="mailBody" 
                            placeholder="Message" 
                            value={this.state.mailBody}
                            onChange={this.handleChange}
                        />
                    </div>
    
                    <button type="submit">Send Message</button>
                </form>
    
                <p>Jordan D. Spell © 2019</p>
            </section>
        );
    }
    
}

export default Contact;