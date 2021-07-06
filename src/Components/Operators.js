import React from 'react';

const Operators = ({operator, setCalculo,calculo}) => {
    const inputOperator=()=>{
        setCalculo(calculo + operator)
            }

    return ( 
<button className="operator" onClick={inputOperator}>{operator}</button>

     );
}
 
export default Operators;