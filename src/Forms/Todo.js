import React, { useState } from 'react';
import TodoList from './TodoList';
function Todo() {
    const [inputList,setinputlist] = useState("");
    const [items, setitems] = useState([]);

    const itemEvents =(event)=>{
        setinputlist(event.target.value)
    };

    const listofItems= () =>{
        setitems((olditems)=>{
            return [...olditems, inputList]
        });
        setinputlist("");
    };
    const deletItems =(id) =>{
        console.log('deleted');
        setitems((olditems) =>{
            return olditems.filter((arrElem, index)=>{
                return index !== id
            })
        })
    };

    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add item list"
                  value={inputList}
                 onChange={itemEvents}/>
                <button onClick={listofItems}> + </button>

                <ol>
                    {/* <li> {inputList} </li> */}

                    {items.map((itemval, index)=>{
                       return <TodoList 
                      key={index}
                      id={index} 
                      text={itemval}
                      onSelect={deletItems}  
                      />;
                    })}
                </ol>
            </div>
        </div>
        </>
    )
}
export default Todo;