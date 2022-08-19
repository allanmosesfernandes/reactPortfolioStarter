import React, { useRef, useState } from 'react';
import Modal from '../modal/Modal';

import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'
import './contact.css'


const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6knt0lr', 'template_ia8rze6', form.current, 'HvDjbJlmmV_W0QXrw')
      .then((result) => {
              setOpenModal(true)

      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

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

        <form  ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder=' Name' required/>
          <input type="email" name='email' placeholder='Enter your email' required/>
          <textarea name="message" placeholder="Drop your queries in here and we'll get back to you soon!"required></textarea>

          <button type='submit' className='btn btn-primary'>SUBMIT</button>
          <Modal open={openModal} onClose={() => setOpenModal(false)} / >
        </form>
      </div>
    </section>
  )
}

export default Contact