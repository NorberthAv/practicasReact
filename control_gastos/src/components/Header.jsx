import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setisValidPresupuesto }) => {



    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto ? (
               <ControlPresupuesto
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
