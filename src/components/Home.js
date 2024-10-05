// src/components/Home.js
import React from 'react';
import profileP from './Side.png'; // Replace with your image
import styles from './Home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';




function Home() {

  const [text] = useTypewriter({
    words : ['HTML', 'CSS', 'JavaScript', 'React JS', 'Bootstrap' ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50,




  });

  return(
  <div className='HomeSection'>
    <div className='TextSection'>
     <h1>Hello, it's me<br></br><span>Vinay Hire</span><br></br> and I'm a Frontend Developer</h1>
     
     <div className='SocialMedia'>
     <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/vinay-hire-239b65245/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
    
      <div className='ButtonContainer'>
        <button className='MainButton'>Download Resume</button>
        <button className='MainButton' >Visit Github link</button>
      </div>
    </div>

    
    <div className='container' >
      <h1 className='Tcursor'>

        <span className='TextInside'>
        {text}
        </span>
        <Cursor  cursorColor='neon' cursorStyle='|' cursor Color='orange'/>

      </h1>
    </div>
  </div>)
}


export default Home;
