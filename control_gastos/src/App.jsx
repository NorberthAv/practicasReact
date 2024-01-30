import { useEffect, useState, React } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false)
  const [animarModal, setanimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const [gastosEditar, setGastosEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setanimarModal(true)
      }, 500);
    }
  }, [gastosEditar])




  const handleNuevoGasto = () => {
    setGastosEditar({})
    setModal(true)

    setTimeout(() => {
      setanimarModal(true)
    }, 500);
  }
  const guardarGasto = gasto => {

console.log(gasto)
    if(gasto.id){
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ?
         gasto : gastoState)
         setGastos(gastosActualizados)
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
      //Nuevo gasto
    }

    setanimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    
    setGastos(gastosActualizados)
    

  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div>
          <main>
            <ListadoGastos
            eliminarGasto = {eliminarGasto}
              gastosEditar={gastosEditar}
              setGastosEditar={setGastosEditar}
              gastos={gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto} alt="Icono Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </div>
      )}

      {modal && (
        <Modal
          gastosEditar={gastosEditar}
          animarModal={animarModal}
          setanimarModal={setanimarModal}
          setModal={setModal}
          guardarGasto={guardarGasto}
        />)

      }

    </div>
  )
}

export default App
