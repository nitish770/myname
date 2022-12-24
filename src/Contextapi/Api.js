import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Api() {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=>{
        async function getData() {
            
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length)
        }
        getData()
    });
    
    return(
        <>
        <h1> you choose <span style={{color:'red'}}> {num} value </span> </h1>
        <h1> my name is <span style={{color:'red'}}> {name} </span></h1>
        <h1> I have  <span style={{color:'red'}}> {moves} moves </span> </h1>

        <select value={num} onChange={(event) =>{
            setNum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    )
}
export default Api;





// import Api from "./Contextapi/Api";
// import ComA from "./Contextapi/ComA";
// import Title from "./Contextapi/Title";
// import UseEffichook from "./Contextapi/UseEffichook";
// import Miniprj from "./Forms/Miniprj";
// import "./form.css";
// import "./todo.css";
// import "./app.css";
// import Form from "./Forms/Form";
// import Form1 from "./Forms/Form1";
// import Todo from "./Forms/Todo";






 {/* <Api/> */}
    {/* <UseEffichook/> */}
    {/* <ComA/>
    <Title/> */}
    {/* <Miniprj/> */}
    {/* <Todo/> */}
   {/* <Form/> */}
   {/* <Form1/> */}