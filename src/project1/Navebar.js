import React from 'react'
import { Link } from 'react-router-dom';

function Navebar() {
  return (
    <>
    <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className=''>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
    Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">

      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item ">
        
          <Link activeClassName='menu_active'
           className="nav-link active"
           aria-current="page" to="/">
           Home
           </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="#">
          Home </Link>
        </li> */}
        <li className="nav-item">
          <Link activeClassName='menu_active' className="nav-link" to="/about">
          About 
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='menu_active' className="nav-link" to="/contact">
          Contact
           </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName='menu_active' className="nav-link" to="/services">
          Services
           </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </div>
  </div>
   </div>
    </>
  )
}

export default Navebar;
