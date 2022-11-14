import React from "react";
import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import About from "./About";

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
    <App/>
    <About/>
  </React.StrictMode>
    
)