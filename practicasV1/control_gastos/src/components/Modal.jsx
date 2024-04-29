import { useState, useEffect } from "react"
import Mensaje from './Mensaje'
import CerrarModal from "../img/cerrar.svg"

const Modal = ({
    setModal,
    animarModal,
    setanimarModal,
    guardarGasto,
    gastosEditar }) => {

    const [nombre, setnombre] = useState('')
    const [cantidad, setcantidad] = useState('')
    const [categoria, setcategoria] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [id, setId] = useState('')


    useEffect(() => {
        if(Object.keys(gastosEditar).length > 0 ){
            setnombre(gastosEditar.nombre)
            setcantidad(gastosEditar.cantidad)
            setcategoria(gastosEditar.categoria)
            setId(gastosEditar.id)
          }
    }, [])

    const ocultarModal = () => {
        setanimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son Obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 500)

            return;
        }

        guardarGasto({ nombre, cantidad, categoria, id })

    }


    return (
        <div className="modal">
            <div className="cerrar-modal cursor-pointer">
                <img src={CerrarModal}
                    onClick={ocultarModal}
                    alt="Cerrar Modal" />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>{gastosEditar.id ? 'Editar Gasto': 'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre"> Nombre Gasto</label>
                    <input type="text"
                        id="nombre"
                        value={nombre}
                        onChange={e => setnombre(e.target.value)}
                        placeholder="Añade el nombre del Gasto"

                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number"
                        id="cantidad"
                        value={cantidad}
                        onChange={e => setcantidad(Number(e.target.value))}
                        placeholder="Añade una Cantidad del gasto: ej 5.000"

                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>

                    <select name="categoria" id="categoria"
                        value={categoria}
                        onChange={e => setcategoria(e.target.value)}
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
                <input type="submit" value={gastosEditar.id ? 'Guardar Cambios': 'Añadir Gasto'} />
            </form>


        </div>
    )
}

export default Modal
