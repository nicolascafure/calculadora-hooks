import React from 'react';

const Number = ({number, setCalculo, calculo}) => {
    
    const inputNumber=()=>{

setCalculo({...calculo ,number})
console.log(number)
    }

    return ( 
        <button className="number" onClick={inputNumber} >
            {number}
            </button>
     );
}
 
export default Number;