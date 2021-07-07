import React from 'react';

const BtnNumber = ({boton ,setCalculo, calculo}) => {

    let valorBoton

   
 if({boton}.boton==="-"||{boton}.boton==="+"||{boton}.boton==="*"||{boton}.boton==="/"){
valorBoton="operator"
 }else{
     valorBoton="number"
 }

    
    const inputNumber=()=>{
setCalculo(calculo + boton)

    }

    return ( 
      <button className={valorBoton} onClick={inputNumber} >
       {boton}</button>
      
     );
}
 
export default BtnNumber;