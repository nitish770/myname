import React, { createContext } from 'react';
import ComB from './ComB';

const FirstName = createContext();
const LastName = createContext();

function ComA() {
    return(
        <>
        <FirstName.Provider value={"Vishnu Kumar"}>
        <LastName.Provider value={"Nitish Ranjan"}>
        <ComB/>
        </LastName.Provider>
        </FirstName.Provider>
        
        </>
    )
}
export default ComA;
export {FirstName,LastName};