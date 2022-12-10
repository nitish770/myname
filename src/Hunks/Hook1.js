import React, { useState } from 'react'

function Hook1() {
    let CurrTime = new Date().toLocaleTimeString();
    const [Ctime,setCtime] =useState(CurrTime);

    const Updtime = () =>{
        CurrTime = new Date().toLocaleTimeString();
        setCtime(CurrTime)
    };

    return(
        <>
            <h1>{Ctime}</h1>
            <button onClick={Updtime}>Click ME</button>
        </>
    )
}
export default Hook1;