import React, { useState } from 'react';

function Form1() {
    const [Name,setName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });
   
const inputEvents =(event)=>{
    console.log(event.target.value);
    console.log(event.target.value);

    // const value = event.target.value;
    // const Name = event.target.value;
    const {value,Name} = event.target;

    setName((preValue) =>{
        if (Name === "fname") {
            return{
                fname: value,
                lname: preValue.lname,
                email: preValue.email,
                phone: preValue.phone,
            };
        }else if (Name === "lname") {
            return{
                fname: preValue.fname,
                lname: value,
                email: preValue.email,
                phone: preValue.phone,
            };
        }else if (Name === "email") {
            return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: value,
                phone: preValue.phone,
            };
        }else if (Name === "phone") {
            return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: preValue.email,
                phone: value,
            };
        }
    });
};
   const onSubmit = (event) =>{
    event.preventDefault();
    alert("form submitted")
   }
    
  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmit}>
        <div>
            <h1> Hello {Name.fname} {Name.lname} </h1>
            <p> {Name.email}  </p>
            <p> {Name.phone}  </p>
            <input
             type='text'
             placeholder='Enter Your Name'
             name='fname'
            onChange={inputEvents}
            value={Name.fname}
            />
            <br/>
            <input
             type='text'
             placeholder='Enter Your Last Name'
             name='lname'
            onChange={inputEvents}
            value={Name.lname}
            />
            <br/>
            <input
             type='text'
             placeholder='Enter Your Email'
             name='email'
            onChange={inputEvents}
            value={Name.email}
            autoComplete = "off"
            />
            <br/>
            <input
             type='text'
             placeholder='Enter Your Phone'
             name='fname'
            onChange={inputEvents}
            value={Name.phone}
            />
            <button type='submit'>Click Me</button>
         </div>
        </form>
     </div>
    </>
  )
}

export default Form1
