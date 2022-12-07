import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from "./Megha/Home";
import Navibar from "./Megha/Navibar";
import About1 from "./Megha/About1";
import Contact from "./Megha/Contact";


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
    <BrowserRouter>
     <Navibar/>


     <Routes>
     <Route path="/home" element={<Home/>}/>
     <Route path="/about" element={<About1/>}/>
     <Route path="*" element={<Contact/>}/>
     
     </Routes>



     </BrowserRouter>
    
   
  </React.StrictMode>
    
)