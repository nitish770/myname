import React from 'react'

function Home() {
  const a=70;

  const abc=()=>{
    alert('hello react js');
  }

  const ctr=(e)=>{
    alert(e.target.value);
    console.log(e);
  }
  return (
    <div>
      <h1 style={{color:'gray',fontSize:`${a}px`}}>welcome my page</h1>
      <button type='button' onClick={abc}>Submit</button>
      <input type="button" value="submit" onClick={ctr}/>
    </div>
  )
}

export default Home;

