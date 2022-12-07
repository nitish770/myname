import React from 'react'
import {Link} from 'react-router-dom';
function Navibar() {
  return (
    <div>
      <Link to="home">Home page</Link>
      <Link to="about">About page</Link> 
      <Link to="contact">Contact page</Link>
      
    </div>
  )
}

export default Navibar;

