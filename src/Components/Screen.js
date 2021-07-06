import React from 'react';

const Screen = ({calculo,error}) => {
    
    return (  
         <div className="screen">
             {error?<p className="errorP">Ingrese un valor correcto</p>:(calculo==="")?<p>0</p>:<p>{calculo}</p>}

</div>

    );
}
 
export default Screen;