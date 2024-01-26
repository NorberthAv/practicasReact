import React from 'react';
import { useEffect, useState } from 'react';
import Error from './Error';

const Formulario = ({paciente, pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [errores, setError] = useState(false);

  //ejecuta cuando cambie la dependencia []
  useEffect(() =>{
    console.log('effect')
  },[paciente])
//ejecuta una vez




  const gernerarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36)
    return random + fecha;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('log');
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true)
      return;
    } 
  
    setError(false)

    //objeto paciente
    const objetoPaciente ={nombre, propietario, email, alta, sintomas,id:gernerarId()}

    setPacientes([...pacientes,objetoPaciente])

    //Reiniciar Form 
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }



  return (

    <div className='md:w-full lg:w-2/5'>
      <h2 className='font-blank text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Paciente y {' '}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>
      <form id='formulario-paciente'
        onSubmit={handleSubmit}
        className='bg-white rounded-lg py-10 px-5 shadow-md  mb-10'>
      
      {errores &&  
      <Error>
      <p>Todos los campos son Obligatorios</p>
        </Error> }
      
        <div className='mb-5'>
          <label htmlFor="mascota"
            className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input type='text'
            className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
            id='mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder='Nombre de mascota' />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario"
            className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder='Nombre de propietario' />
        </div>
        <div className='mb-5'>
          <label htmlFor="email"
            className='block text-gray-700 uppercase font-bold'>Email</label>
          <input type='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email de Contacto' />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta"
            className='block text-gray-700 uppercase font-bold'>alta</label>
          <input type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='alta'
            value={alta}
            onChange={(e) => setAlta(e.target.value)}


          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas"
            className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea name="sintomas"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id="sintomas" cols="12" rows="5"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder='Describe los Sintomas'></textarea>
        </div>
        <input type="submit"
          className='bg-indigo-600 w-full cursor-pointer transition-color hover:bg-indigo-700 p-3 text-white uppercase font-bold'
          value="Agregar Paciente" />
      </form>
    </div>

  )
}

export default Formulario
