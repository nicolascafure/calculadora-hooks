import React from 'react';
const Result = ({calculo}) => {
const getResult=()=>{
console.log(eval(calculo))
}
    return (
        <button className="result" onClick={getResult}>=</button>
        

      );
}

export default Result;