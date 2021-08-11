import React, { useState } from 'react'

const ContactForm = () => {

    return (
        <div>
            <form className="contact-form" action="https://formsubmit.co/kesiahpatil@gmail.com" method="POST" >
                <div className="form-container">
                    <div className="form-group row">
                        <input className="form-control" type="text" name="name" placeholder="Name" required  />              
                    </div>
                    <div className="form-group row">     
                        <input className="form-control" type="email" name="email" placeholder="Email" required  />                            
                    </div>
                    <div className="form-group row">
                        <textarea className="form-control" name="message" rows="5" placeholder="Write Your Message Here!" required />                            
                    </div>
                </div>
                <div className="form-submit">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default ContactForm