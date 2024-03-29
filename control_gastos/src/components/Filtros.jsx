import { useState, useEffect, React } from 'react'

const Filtros = ({filtros,setFiltros}) => {

    

    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label htmlFor="filtro">Filtrar Gastos</label>
                    <select name="filtro" id="filtro"
                    
                        onChange={(e) => setFiltros(e.target.value)}
                    >
                        <option value="">Seleccione ...</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
