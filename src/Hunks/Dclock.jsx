import React, { useState } from 'react'

function Dclock() {
    let time = new Date().toLocaleTimeString();

 const [Crtime,setCtime] = useState(time);

 const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time)
 };

 setInterval(UpdateTime,1000);
    return(
        <>
            <h1>{Crtime}</h1>
        </>
    );
}
export default Dclock;