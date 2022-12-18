import React from "react";
import ReactDom from "react-dom/client";
import ComA from "./Contextapi/ComA";
import UseEffichook from "./Contextapi/UseEffichook";
// import Miniprj from "./Forms/Miniprj";
// import "./form.css";
// import "./todo.css";
// import "./app.css";
// import Form from "./Forms/Form";
// import Form1 from "./Forms/Form1";
// import Todo from "./Forms/Todo";




const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
    <UseEffichook/>
    <ComA/>
    {/* <Miniprj/> */}
    {/* <Todo/> */}
   {/* <Form/> */}
   {/* <Form1/> */}
  </React.StrictMode>
    
)