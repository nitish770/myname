import React, { useEffect, useState } from 'react';

function Title() {
    const [num, setnum] = useState(0);
    useEffect(()=>{
        document.title = `Clicked me ${num} times`;
    });

    return(
        <>
        <button onClick={()=>{setnum(num + 1)}}>
       <h1>Clock me {num}</h1> 
        </button>
        </>
    )
}
export default Title;