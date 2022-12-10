import React from "react";
import ReactDom from "react-dom/client";
import Hook from "./Hunks/Hook";
import "./hooks.css";
import Hook1 from "./Hunks/Hook1";
import Dclock from "./Hunks/Dclock";
import Events from "./Hunks/Events";



const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
   <Hook/>
   <Hook1/>
   <Dclock/>
   <Events/>
  </React.StrictMode>
    
)