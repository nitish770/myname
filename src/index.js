// import React from "react";
// import ReactDom from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import Main from "./router/Main";
// import './app.css'

// const root = ReactDom.createRoot(document.getElementById('root'))
// root.render(
//     <React.StrictMode>
//     <BrowserRouter>
//     <Main/>
//     </BrowserRouter>
    
   
//   </React.StrictMode>
    
// )








import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Appp from "./project1/Appp";
import './projects.css';


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Appp/>
    </BrowserRouter>
   
  </React.StrictMode>
)
