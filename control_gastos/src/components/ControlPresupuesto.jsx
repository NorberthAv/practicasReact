import { useState, useEffect ,React} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { formatearCantidad } from '../helpers';

const ControlPresupuesto = ({ presupuesto, gastos }) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        setGastado(totalGastado)

        const totalDisponible = presupuesto - totalGastado;
        setDisponible(totalDisponible)

        //Calcular Porcentaje

        const nuevoPorcentaje = (
            ((presupuesto - totalDisponible) / presupuesto) * 100
        ).toFixed(2);
        
        setTimeout (() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1200)


    }, [gastos])

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
               <CircularProgressbar
               styles={buildStyles({
                pathColor: '#19EAE0',
                trailColor: '#f5f5f5',
                textColor:'#19EAE0',
               })}
               value={porcentaje}
               text={`${porcentaje}% Gastado`}
               
               />
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto : </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible : </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado : </span>{formatearCantidad(gastado)}
                </p>

            </div>
        </div>
    )
}

export default ControlPresupuesto
