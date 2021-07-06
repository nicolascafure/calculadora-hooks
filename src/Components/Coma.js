import React from 'react';
const Coma = ({setCalculo, calculo}) => {
    const inputComa=()=>{
        setCalculo(calculo + ".")
            }
    return ( 
        <button className="coma" onClick={inputComa}>.</button>
     );
}
 
export default Coma;