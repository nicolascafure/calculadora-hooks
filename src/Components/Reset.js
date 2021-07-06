import React from 'react';

const Reset = ({setCalculo,setError}) => {
    const resetValues =()=>{
        setCalculo("")
        setError(false)
    }

    return (<button className= "reset" onClick={resetValues}>Reset</button>  )
    
}
 
export default Reset;