import React, { useEffect, useState } from 'react';

function UseEffichook() {
    const [num, setnum] = useState(0);
    const [nums, setnums] = useState(0);

    useEffect(()=>{
        alert('clicked');
        console.log('I clicked');
    },[num]);
    return(
    <>
    <button 
    onClick={
        (()=>{setnum(num +1);
    }
    )}
    > 
    <h1>Click me  {num}</h1>
    </button>
    <br/>

    <button 
    onClick={
        (()=>{setnums(nums +1);
    }
    )}
    > 
    <h1>Click me  {nums}</h1>
    </button>
    </>
    );
}
export default UseEffichook;