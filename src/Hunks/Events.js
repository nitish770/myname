import React, { useState } from 'react'

function Events() {
    const purple = '#8e44ad';

    const [bgchange,setBgch] = useState(purple);
    const [Name,setname] = useState('Click ME');

    const Change = () =>{
        let newbg = 'green';
        setBgch(newbg);
        setname('Ohh  : wolf ');
    }

    const bgsBack = () =>{
        setBgch(purple);
        setname('Ayyo!! : angery ');
    }
        return(
        <>
            <div style={{backgroundColor : bgchange}}>
                <button onMouseEnter={Change} onMouseLeave={bgsBack}> {Name}</button>
            </div>
        </>
    )
}
export default Events;