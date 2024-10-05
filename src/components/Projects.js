// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import styles from './Projects.css'

const Projects = () => {
  return (
    <div className='ProjectsSection'>
      <h1>My Projects</h1>
      <div className='ProjectList'>
        <div className='Project'>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className='Project'>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
      </div>
    </div>
  );
};



export default Projects;
