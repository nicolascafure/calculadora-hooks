import React from 'react';

const BtnNumber = ({number, setCalculo, calculo}) => {
    
    const inputNumber=()=>{
setCalculo(calculo + number)

    }

    return ( 
        <button className="number" onClick={inputNumber} >
            {number}
            </button>
     );
}
 
export default BtnNumber;