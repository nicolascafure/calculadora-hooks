import React from 'react';

const Reset = ({setCalculo}) => {
    const resetValues =()=>{
        setCalculo("")
    }

    return (<button className= "reset" onClick={resetValues}>Reset</button>  )
    
}
 
export default Reset;