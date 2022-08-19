import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import './footer.css';

const footer = () => {
  return (
    <footer>
      <a href='/' className='footer__logo'>My Logo</a>

      <ul className="permalinks">
        <li><a href='/'>home</a></li>
        <li><a href='/'>about</a></li>
        <li><a href='/'>experiences</a></li>
        <li><a href='/'>services</a></li>
        <li><a href='/'>testimonials</a></li>
        <li><a href='/'>contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
      <small>&copy; Allan Fernandes. All rights reserved.</small>


      </div>

    </footer>

  )
}

export default footer


