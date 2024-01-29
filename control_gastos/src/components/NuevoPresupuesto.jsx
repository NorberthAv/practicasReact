import React from 'react'
import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setisValidPresupuesto}) => {
const [mensaje , setMensaje] = useState ();
const HandlePresupuesto = (e) => {
e.preventDefault();
console.log(Number(presupuesto));
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
        setMensaje('No es un Presupuesto Valido')
        return
    }
    setMensaje('')
    setisValidPresupuesto(true)
}

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={HandlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label htmlFor="presupuesto">Definir Presupuesto</label>
                    <input type="number" 
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={(e) => setPresupuesto(Number(e.target.value))}
                    className='nuevo-presupuesto' id='presupuesto' />

                    <input type="submit"value="AÑADIR"/>
                </div>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
         
            </form>
        </div>
    )
}

export default NuevoPresupuesto
