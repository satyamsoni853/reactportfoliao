import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='body'>
        <div className="contact-container">
            <form action="https://api.web3forms.com/submit" method="POST" className='contact-left'>
                <div className="contact-left-title">
                    <h2>Get In Touch</h2>
                    <hr />
                </div>
                <input type="hidden" name="access_key" value="f5e9b95b-ceb0-42ce-a6ce-b9511c7f96e6" />
                <input type="text" name='name' placeholder='enter your name' className='contact-input' required />
                <input type="email" name='email' placeholder='enter your email' className='contact-input' required />
                <textarea name="message" placeholder='your message' className='contact-input' required ></textarea>
                <button type='submit' >Sumbit</button>
               
            </form>
          
        </div>
      
    </div>
  )
}

export default Contact
