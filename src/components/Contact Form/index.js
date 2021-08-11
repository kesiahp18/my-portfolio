import React, { useState } from 'react'
import validateEmail from './emailValidation'

const ContactForm = () => {
    const [formInputs, setFormInputs] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState() 

    const {name, email, message} = formInputs

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errorMessage) {
            console.log('fix errors before submitting')
        } else {
            console.log(formInputs)
        }

        setFormInputs({ name: '', email: '', message: '' })
    }
    const handleChange = (e) => {
        if (e.target.value.length < 1) {
            e.target.classList.add('error-class')
            setErrorMessage(`Please enter a${e.target.name === 'email' ? 'n' : ''} ${e.target.name} before submitting!`)
        } else if (e.target.name === 'email' && !validateEmail(e.target.value)) {
            e.target.classList.add('error-class')
            setErrorMessage("Invalid email!")
        } else {
            e.target.classList.remove('error-class')
            setErrorMessage()
            setFormInputs({...formInputs, [e.target.name]: e.target.value})
        }
    }

    return (
        <div>
            <form className="contact-form" action="https://formsubmit.co/kesiahpatil@gmail.com" method="POST" onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-group row">
                        <input className="form-control" type="text" name="name" placeholder="Name" required onBlur={handleChange} />              
                    </div>
                    <div className="form-group row">     
                        <input className="form-control" type="email" name="email" placeholder="Email" required onBlur={handleChange} />                            
                    </div>
                    <div className="form-group row">
                        <textarea className="form-control" name="message" rows="5" placeholder="Write Your Message Here!" required onBlur={handleChange} />                            
                    </div>
                </div>
                {
                    errorMessage && (
                        <div className="error-message-div">
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )
                }
                <div className="form-submit">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default ContactForm