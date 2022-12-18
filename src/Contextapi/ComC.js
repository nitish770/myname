import React, { useContext } from 'react';
// import ComD from './ComD';
import { FirstName, LastName } from './ComA';

function ComC() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <>
        <h1> 
           Welcom   {fname}  {lname}
         </h1>
        </>
    )
}
export default ComC;