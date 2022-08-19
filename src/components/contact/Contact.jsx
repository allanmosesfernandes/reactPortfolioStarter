import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'
import './contact.css'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummygator@gmail.com</h5>
            <a href="mailto:fernzallan14@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>dummygator@gmail.com</h5>
            <a href="mailto:fernzallan14@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummygator@gmail.com</h5>
            <a href="mailto:fernzallan14@gmail.com">Send a message</a>
          </article>

        </div>
        {/* //End of Contact Options // */}

        <form action="">
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Enter your email' required/>
          <textarea name="Your message" required></textarea>

          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact