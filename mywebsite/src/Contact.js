import React, { Component } from 'react';
import axios from 'axios';

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
        <div>
            <h1>
                Contact
            </h1>
        </div>
        <div className="contact-form">
            <form method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
    
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="3"></textarea>

                <input type="submit" />
            </form>
        </div>
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


