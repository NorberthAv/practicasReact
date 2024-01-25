import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [pacientes, setPacientes] = useState([])


  return (
   
    <div className='container mx-auto'>
      <Header 
      numeros={1}
      isAdmin={false}
      />
      <div className='mt-12 md:flex'>
      <Formulario 
            pacientes = {pacientes}
            setPacientes ={setPacientes}
        />
      <ListadoPacientes
        pacientes = {pacientes}
        />
      </div>
    </div>
   
  )
}

export default App
