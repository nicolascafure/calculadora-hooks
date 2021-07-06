import React from 'react';
const Result = ({calculo,setCalculo, setError}) => {

const getResult=()=>{
try{
  setCalculo(eval(calculo))
  setError(false)
}catch(err){
if(err){
  setCalculo("")
  setError(true)
}
}
}
    return (
        <button className="result" onClick={getResult}>=</button>
        

      );
}

export default Result;