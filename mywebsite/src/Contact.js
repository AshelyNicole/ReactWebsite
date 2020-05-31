import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Styles = styled.div `
    .contact-heading {
        text-align: center;
        text-transform: uppercase;
        line-height: 0;
        margin-bottom: 5rem;
    }

    .contact-heading h1{
        font-size: 4rem;
        opacity: .3;
    }
    
    .contact-form {
        align-item: center;
    }
`;

export class Contact extends Component {
    state = {
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Send Message'
    }
  
    render() {
      return (
        <React.Fragment>
            <Styles>
                <div className="contact-heading">
                    <h1>
                        Contact
                    </h1>
                </div>
                <div className="contact-form">
                    <form method="POST">
                        <label htmlFor="name">Name: </label>< br/>
                        <input type="text" name="name" /><br/>
                        
                        <label htmlFor="email">Email:</label><br/>
                        <input type="email" name="email" /><br/>
            
                        <label htmlFor="message">Message:</label><br/>
                        <textarea name="message" rows="3"></textarea>
                        <br/>
                        <input type="submit" />
                    </form>
                </div>

            </Styles>
        </React.Fragment>
      )
    }
    formSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
            buttonText:'...sending'
        })
        
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }

        axios.post('API_URL', data)
        .then(res => {
            this.setState({ sent: true}, this.resetForm())
        })
        .catch( () => {
            console.log('Message not sent')
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Message Sent'
        })
    }
}


export default Contact;


