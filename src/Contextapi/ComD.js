import React from 'react';
import { FirstName, LastName } from './ComA';

function ComD() {
    return(
        <>
        <FirstName.Consumer>

         {(fname) =>{
            return(
                <LastName.Consumer>
                    {(lname)=>{
                    return ( 
                    <h1> 
                     Welcom to  {fname} {lname} 
                    </h1>
                    );
                    }}
                </LastName.Consumer> );
        }} 
 </FirstName.Consumer>
       </>);
}
export default ComD;