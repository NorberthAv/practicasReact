import { useState } from "react"
import CerrarModal from "../img/cerrar.svg"

const Modal = ({setModal, animarModal,setanimarModal}) => {

const [nombre, setnombre] = useState(0)
const [cantidad, setcantidad] = useState(0)
const [categoria, setcategoria] = useState(0)


const ocultarModal = () =>{
    setanimarModal(false)

    setTimeout(() =>{
        setModal(false)
    },500)
}

  return (
    <div className="modal">
        <div className="cerrar-modal cursor-pointer">
            <img src={CerrarModal} 
            onClick={ocultarModal}
            alt="Cerrar Modal" />
        </div>
        <form className={`formulario ${animarModal ? "animar":"cerrar" }`}>
            <legend>Nuevo Gasto</legend>

            <div className="campo">
                <label htmlFor="nombre"> Nombre Gasto</label>
                <input type="text" 
                id="nombre"
                placeholder="Añade el nombre del Gasto"
                
                />
            </div>
            <div className="campo">
                   <label htmlFor="cantidad">Cantidad</label>
                <input type="number" 
                id="cantidad"
                placeholder="Añade una Cantidad del gasto: ej 5.000"
                
                />
            </div>
            <div className="campo">
                   <label htmlFor="categoria">Categoria</label>
             
             <select name="categoria" id="categoria">
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
            <input type="submit" value="Añadir Gasto"/>
        </form>


    </div>
  )
}

export default Modal