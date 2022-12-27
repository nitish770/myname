import React from 'react';
import Boute from './Boute';
import Conte from './Contet';
import Error from './Error';
import {Routes, Route} from 'react-router-dom';
import  Navbar  from './Navbar';
import Service from './Service';
import Params from './Params';

function Main() {
    const Name = () =>{
        return <h1>hello name</h1>
    }
    return(
        <>
        <Navbar/>
        <Routes>
<Route path='/' element={<Boute name='About'/>}/>
<Route path='/service' element={<Service name='services'/>}/>
<Route path='/param' element={<Params/>}/>
<Route path='/conte' element={<Conte/>}/>
<Route path='/conte/name' element={<Name/>}/>
<Route path='*' element={<Error/>}/>
        </Routes>



        </>
    )
}
export default Main;

