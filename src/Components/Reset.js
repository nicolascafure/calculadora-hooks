import React from 'react';
import PropTypes from "prop-types";

const Reset = ({setCalculo,setError}) => {
    const resetValues =()=>{
        setCalculo("")
        setError(false)
    }

    return (<button className= "reset" onClick={resetValues}>Reset</button>  )
    
}
Reset.propTypes ={
 setCalculo: PropTypes.func.isRequired,
setError: PropTypes.func.isRequired

 } 
export default Reset;