import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
        <div className="navbar_style">
           <Link  to="/">Boute</Link>
           <Link  to="/service">Service</Link>
           <Link  to="/param">Params</Link>
           <Link  to="/conte">ConteUS</Link>
           <Link  to="*">Error</Link>
           {/* <Link  to="/conte/name">Name</Link> */}
          
          <br/>
          {/* <h1> <a href="/">Boute</a></h1> 
          <h1> <a href="/conte">Conte</a></h1> 
          <h1> <a href="/conte/name">Name</a></h1>  */}
          </div>
        </>
    )
}
export default Navbar;