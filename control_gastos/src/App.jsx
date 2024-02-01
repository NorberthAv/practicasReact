import { useEffect, useState, React } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import Filtros from './components/filtros';
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false)
  const [animarModal, setanimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [gastosEditar, setGastosEditar] = useState({})
  const [filtros, setFiltros] = useState('')
  const [gastosfiltros, setGastosFiltros] = useState([])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)

  }, [presupuesto])


  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])

  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if (presupuestoLS > 0) {
      setisValidPresupuesto(true)
    }

  }, [])


  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setanimarModal(true)
      }, 500);
    }
  }, [gastosEditar])

  useEffect(() =>{
    console.log(filtros)
    if(filtros){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtros)
   
      setGastosFiltros(gastosFiltrados)

    }

  },[filtros])


  const handleNuevoGasto = () => {
    setGastosEditar({})
    setModal(true)

    setTimeout(() => {
      setanimarModal(true)
    }, 500);
  }
  const guardarGasto = gasto => {

    console.log(gasto)
    if (gasto.id) {
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ?
        gasto : gastoState)
      setGastos(gastosActualizados)
    } else {
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
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div>
          <main>
            <Filtros
            filtros={filtros}
            setFiltros={setFiltros}
            />
            <ListadoGastos
            filtros ={filtros}
            gastosfiltros={gastosfiltros}
              eliminarGasto={eliminarGasto}
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
