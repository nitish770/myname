import React from 'react'
import  Card  from './Card';
import Sdata from './Sdata';

function Services() {
  return (
    <>
    
      <div className='my-5'>
      <h1 className='text-center'> Our Services</h1>
      </div>
      <div className='container-fluid mb-2'>
            <div className='row'>
                <div className=''>
                    <div className='row gy-3'>
                    
                   {Sdata.map((val, ind) =>{
                    return<Card key={ind} imgsrc={val.imgsrc}
                      title={val.title}
                    />
                   })}
                    </div>
                </div>
            </div>
    </div>
    
    </>
  )
}

export default Services;