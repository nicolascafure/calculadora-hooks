import React from 'react';

const Number = ({number}) => {
    
    const inputNumber=(e)=>{

    }

    return ( 
        <button className="number" onInput={inputNumber} >
            {number}
            </button>
     );
}
 
export default Number;