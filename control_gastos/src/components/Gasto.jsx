import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions

} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatearFecha, formatearCantidad } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSubcripciones from '../img/icono_suscripciones.svg'
import IconoOtros from '../img/icono_ocio.svg'


const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSubcripciones,
    otros: IconoOtros,
}

const Gasto = ({ gasto ,gastosEditar, setGastosEditar, eliminarGasto }) => {
    console.log(gasto);
    const { id, nombre, cantidad, categoria, fecha } = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastosEditar(gasto)}
            destructive={true}>
                Editar
            </SwipeAction>
        </LeadingActions>

    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => eliminarGasto(id)}
            destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >

                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={diccionarioIconos[categoria]} alt="Icono" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>
                                Agregado el : {''}
                                <span>{formatearFecha(fecha)}</span>
                            </p>


                        </div>
                    </div>
                    <p className='cantidad-gasto'>{formatearCantidad(cantidad)}</p>

                </div>
            </SwipeableListItem>
        </SwipeableList>
    )

}

export default Gasto
