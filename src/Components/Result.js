import React from 'react';
const Result = ({calculo,setCalculo, setError}) => {

const getResult=()=>{
try{
  setCalculo(eval(calculo))
  if(calculo===""){
    setCalculo("0")
  }
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