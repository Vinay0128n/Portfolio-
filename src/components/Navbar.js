
import React from 'react';
import { Link } from 'react-router-dom';
import styles from'./Navbar.css';
import profilePic from './profile.png'; // Replace with your image


const Navbar = () => {
  return (
    <nav className='Navbar'>

      <div className='logo'>
      <img src={profilePic} alt="Profile" />
      <h2 className='Main'>Portfolio</h2>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>

    </nav>
  );
};



export default Navbar;
