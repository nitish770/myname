import React from 'react';
import { useState } from 'react';

function About1() {
  const [statevariable,statefunction]=useState('kumar');

  const abc=()=>{
    statefunction('Nitish');
  }
    // const d=100;

    const [a,b]=useState('green');

    const mycolor=(myelement)=>{
      console.log(myelement.traget.value);
      b(myelement.traget.value);
    }

    const [c,d]=useState(20);

    const xyz = (myel)=>{
      d(myel.traget.value);
    }
  return (
    <div style={{background:`${a}`}}>
      <h1 style={{color:'red',fontSize:`${c}px`}}>Welcome to my Chanle</h1>

      <div className="card">
  <img src="image/img1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <h1 onClick={abc}>{statevariable}</h1>
    
    <input type="color" onChange={mycolor} />
    <select onChange={xyz}>
      <option>20</option>
      <option>30</option>
      <option>40</option>
      <option>50</option>
      <option>70</option>
    </select>

  </div>
</div>
      {/* <h1 onClick={abc}>{statevariable}</h1>
      <input type="color" onChange={mycolor}/>
      <section onChange={xyz}>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
      </section> */}
    </div>
  )
}

export default About1
