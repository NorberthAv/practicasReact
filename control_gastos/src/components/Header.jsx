import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({
    gastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setisValidPresupuesto }) => {



    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto ? (
               <ControlPresupuesto
               gastos={gastos}
               presupuesto ={presupuesto}/>
            ) : (
                <NuevoPresupuesto
                    setisValidPresupuesto={setisValidPresupuesto}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                />
            )}

        </header>
    )
}

export default Header
