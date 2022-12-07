import React from "react";
import ReactDom from "react-dom/client";
import Hook from "./Hunks/Hook";
import "./hooks.css";



const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
   <Hook/>
  </React.StrictMode>
    
)