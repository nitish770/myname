import React from 'react'
// import { Link } from 'react-router-dom';
import Comm from './Comm';

function About() {
  return (
    <>
     <Comm
      name='Welcome to About page' 
      imgsrc={'image/adam.jpg'}
      visit= '/contact'
      btname='Contact Now'
      />
    </>
  )
}

export default About;