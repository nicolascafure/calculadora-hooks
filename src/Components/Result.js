import React from 'react';
import PropTypes from "prop-types";
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
}else{
   setHistorial([...historial,nuevoHistorial])}
   
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

Result.propTypes ={
  calculo: PropTypes.string.isRequired,
  setCalculo: PropTypes.func.isRequired,
  historial: PropTypes.array.isRequired,
  setHistorial: PropTypes.func.isRequired,
  setError:PropTypes.func.isRequired

} 
export default Result;