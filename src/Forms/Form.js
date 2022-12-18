import React, { useState } from 'react';

function Form() {
    const [Name,setName] = useState('');

    const [myFullName,setFullName] = useState('');

    const [lastname,setlastname] = useState('');

    const [lastnamesec,setlastnamesec] = useState('');

const inputEvents =(event)=>{
    console.log(event.target.value);
    setName(event.target.value)
}
const onSubmit =(event)=>{
    event.preventDefault();
    setFullName(Name);
    setlastnamesec(lastname);

}
const inputEventssecond =(event) =>{
    setlastname(event.target.value);
}
    return(
        <>
        <div className='main_div'>
        <form onSubmit={onSubmit}>
        <div>
            <h1> Hello {myFullName} {lastnamesec} </h1>
            <input
             type='text' placeholder='Enter Your Name'
            onChange={inputEvents}
            value={Name}
            />
            <br/>
            <input
             type='text' placeholder='Enter Your Lastname'
            onChange={inputEventssecond}
            value={lastname}
            />
            <button type='submit'>Click Me</button>
            </div>
            </form>
            </div>
        </>
        
    )
}
export default Form;