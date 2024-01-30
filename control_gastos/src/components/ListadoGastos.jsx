import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, gastosEditar,setGastosEditar,eliminarGasto }) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>

            {gastos.map( gastoLista => (

                <Gasto
                key= {gastoLista.id}
                eliminarGasto={eliminarGasto}
                gastosEditar ={gastosEditar}
                setGastosEditar ={setGastosEditar}
                gasto= {gastoLista}
                />
                )
                )}
        </div>
    )
}

export default ListadoGastos
