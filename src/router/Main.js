import React from 'react';
import Boute from './Boute';
import Conte from './Contet';
import Error from './Error';
import {Routes, Route} from 'react-router-dom';

function Main() {
    return(
        <>
        <Routes>
<Route path='/' element={<Boute/>}/>
<Route path='abc' element={<Conte/>}/>
<Route path='*' element={<Error/>}/>
        </Routes>



        </>
    )
}
export default Main;

