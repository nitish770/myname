import React, { useState } from 'react';


function Miniprj() {
    const [num,setnum] = useState(0);

    const incNum =() =>{
        setnum(num + 1);
    };

    const decNum =() =>{
        if (num > 0) {
            setnum(num - 1);
        }else{
            alert('Sorry, Only for Limit');
            setnum(0);
        }
       

    }
    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <h1> {num} </h1>
                <div className='btn_div'>
                    <button onClick={incNum}> + </button>
                    <button onClick={decNum}> - </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Miniprj;