import React from 'react'
import { useNavigate, Form } from 'react-router-dom'
import Formulario from '../components/Formulario'

export async function action({request}){
  const formData = await request.formData()
  console.log('submit...',request,formData)

  return formData;
}

const NuevoCliente = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Clientes</h1>
      <p className='mt-10'> Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)}>
          Volver
        </button>

      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto mt-20 px-5 py-10'>
        <Form
        method='POST'
 
        >
          <Formulario />
          <input type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
