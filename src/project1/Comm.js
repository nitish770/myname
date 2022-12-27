import React from 'react'
import { Link } from 'react-router-dom';

function Comm(props) {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
      <div className='container-fluid'>
            <div className='row'>
                <div className=''>
                    <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1> 
                        {props.name}
                         <strong className='brand-name'> TEAMWORK </strong> </h1>
                       <h2 className='my-3'> 
                         We are the team of talented development making Websites
                         </h2> 
                         <div className='my-3'>
                            <Link to={props.visit} className='btn-get-started'>
                            {props.btname}
                             </Link>
                         </div>
                    </div>

                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src={props.imgsrc}
                         className='img-fluid animated'
                          alt='about img'/>
                    </div>
                    </div>
                </div>
            </div>
    </div>
      </section>
    </>
  )
}

export default Comm;