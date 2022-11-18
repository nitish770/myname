import React from "react";
import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Megha/Home";
import About from "./Megha/About";
import Cards from "./Megha/Contect";
import './app.css';


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
  <Home/>
  <About/>
  <Cards/>
  <Cards/>
  </React.StrictMode>
    
)