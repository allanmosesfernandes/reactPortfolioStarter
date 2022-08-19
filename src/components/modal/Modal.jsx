import React, { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';

import './modal.css'

const Modal = ({open, onClose}) => {

    if(!open) return null;
    return ( 
        <div className="modal">
            <div className="overlay" onClick={onClose}>
                <div className="modal-content">
                    
                    <BsCheckCircleFill className='modal-content__popup'/>
                    <h3>your message has been received <br/>
                    amigo!</h3>
                    <h4>We'll get back to you soon</h4>
                    <IoIosClose  className='modal-content__close' onClick={onClose}/>
                </div>
            </div>
        </div>
  )
}

export default Modal


