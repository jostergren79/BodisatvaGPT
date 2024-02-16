import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/logo.webp";

const Contact = () => {
  return (
    <main className="contact-content">
      <img src={logo} alt="Company Logo" className='logo'></img>
      <h1>Contact Us</h1>
      <p>Connect with Ostergren Ideas through our social platforms or send us an email directly:</p>
      <div className="contact-details">
      <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a>
        </div>
        <p>Email: <a href="mailto:contactus@ostergrenideas.com">contactus@ostergrenideas.com</a></p>
       
      </div>
    </main>
  );
};

export default Contact;
