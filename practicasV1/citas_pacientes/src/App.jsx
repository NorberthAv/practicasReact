import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import { useState , useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [paciente, setPaciente] = useState({})
  const [pacientes, setPacientes] = useState(() => {

    const savePAcientes = localStorage.getItem('Pacientes');
    return savePAcientes ? JSON.parse(savePAcientes) : [];
  }
)



useEffect (() => {
  localStorage.setItem('Pacientes', JSON.stringify(pacientes));
},[pacientes])

  const eliminarPaciente = (id) => {
    console.log('eliminando paciente',id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  
  }


  return (
   
    <div className='container '>
      <Header 
      numeros={1}
      isAdmin={false}
      />
      <div className='mt-12 md:flex'>
      <Formulario 
            paciente = {paciente}
            setPaciente = {setPaciente}
            pacientes = {pacientes}
            setPacientes ={setPacientes}
        />
      <ListadoPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
   
  )
}

export default App
