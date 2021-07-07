import React from 'react';
import PropTypes from "prop-types";

const Screen = ({calculo,error}) => {
    
    return (  
         <div className="screen">
             {error?<p className="errorP">Ingrese un valor correcto</p>:(calculo==="")?<p>0</p>:<p>{calculo}</p>}

</div>

    );
}

Screen.propTypes ={
    calculo: PropTypes.string.isRequired,
    error:PropTypes.bool.isRequired
  
  } 
 
export default Screen;