import React from 'react'
import { useNavigate, Form ,useActionData} from 'react-router-dom'
import Formulario from '../components/Formulario'
import  Error from '../components/Error'

export async function action({request}){
  const formData = await request.formData()
  console.log('submit...',request,formData)

  // formData.get('nombre')
  const datos = Object.fromEntries(formData)

  //validacion
  const errores = []
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(Object.values(datos).includes('')){
      errores.push('Todos los campos son Obligatorios')
  }

  if(!regex.test(email)){
    errores.push('El Email no es válido')
  }
  if(Object.keys(errores).length){

    return errores
  }
  return formData;
}

const NuevoCliente = () => {

  const errores = useActionData();
  const navigate = useNavigate()
  console.log(errores?.length)

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
        
        {errores?.length && errores.map((error, i) => <Error key={i}>{ error }</Error>)}
        <Form
        noValidate
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
