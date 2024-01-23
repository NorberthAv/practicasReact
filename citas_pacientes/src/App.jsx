import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Header />
      <Formulario/>
      <ListadoPacientes/>
    </>
  )
}

export default App
