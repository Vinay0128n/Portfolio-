
import React from 'react';
import styles from'./Contact.css';
import styled from 'styled-components';


const Contact = () => {
  return (
    <div className='ContactSection'>
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

