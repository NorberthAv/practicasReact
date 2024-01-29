import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);
  const [modal,setModal] = useState(false)
  const [animarModal,setanimarModal] = useState(false)


  const handleNuevoGasto = (e) => {
    e.preventDefault()
    console.log('click')
    setModal(true)

    setTimeout(() =>{
      setanimarModal(true)
    },500);
  }


  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
          src={IconoNuevoGasto} alt="Icono Nuevo Gasto" 
          onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (
      <Modal 
      animarModal={animarModal}
      setanimarModal ={setanimarModal}
      setModal ={setModal}
      />)
        
        }

    </>
  )
}

export default App
