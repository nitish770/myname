import React from 'react'
// import { Link } from 'react-router-dom';
import Comm from './Comm';

function Home() {
  return (
    <>
      <Comm
       name='Grow your business with' 
      imgsrc={'image/avatar.webp'}
      visit= '/service'
      btname='Get Started'/>
    </>
  )
}

export default Home;