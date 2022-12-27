import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

function Params() {
 const {fname} = useParams();
 const location = useLocation();
 const histry = useHistory();
 console.log(histry);
  return (
    <div>
      <h1>use Params {fname}  page </h1>
      <p> my current location {location.pathname}</p>
      {location.pathname === `/param` ?(
        <button onClick={()=> alert('you are awsome')}> click </button>
        ): null }
    </div>
  )
}

export default Params
