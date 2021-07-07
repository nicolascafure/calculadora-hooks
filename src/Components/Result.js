import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const Result = ({calculo,setCalculo, setError,setHistorial, historial}) => {

const getResult=()=>{
try{
  setCalculo(eval(calculo))
  if(calculo===""){

    return setCalculo("0")
  }
  const nuevoHistorial={
    operacion: calculo,
    resultado: eval(calculo) ,
    id: uuidv4()
  }
if(calculo===0){
  return
}else{ setHistorial([...historial,nuevoHistorial])}
 

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