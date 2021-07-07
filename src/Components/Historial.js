import React from 'react';

const Historial = ({calculo,setCalculo,historial, setHistorial}) => {

    const eliminarHistoria = id =>{
        const nuevoHistorial= historial.filter(historia=> historia.id !== id)
        setHistorial(nuevoHistorial)
    }

    const agregarResultado= id =>{
const nuevoResultado =historial.filter(historia=>historia.id === id)
setCalculo(calculo + nuevoResultado[0].resultado)

    }


    return (  
        <div className="contenedor-historial">
           {(historial.length===0)? <h1 className="titulo-historial">No hay nada en el historial</h1>: <h1 className="titulo-historial">Historial de operaciones</h1> }
            {
                historial.map(historia=><div key={historia.id} className="historia">
                    <h3>Calculo</h3>
                    <p> {historia.operacion}</p>
                    <h3>Resultado</h3>
                    <p>{historia.resultado}</p>
                    <div className="contenedor-botones">
                        <button onClick={()=>eliminarHistoria(historia.id)}>Eliminar historia</button>
                        <button onClick={()=>agregarResultado(historia.id)} >Agregar resultado</button>
                         </div>
                     </div>)
            }

        </div>
    );
}
 
export default Historial;