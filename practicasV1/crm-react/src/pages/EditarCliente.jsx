import { useActionData, useLoaderData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import { Form } from "react-router-dom"
import { actualizarCliente, obtenerCliente } from "../data/clientes"
import { useNavigate } from "react-router-dom"
import Error from "../components/Error"

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId)

    if(Object.values(cliente).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'No hay Resultados'
        })
    }
    console.log('here');
    return cliente
}
export async function action({request, params}){
  const formData = await request.formData()
  // formData.get('nombre')
  const datos = Object.fromEntries(formData)

  //validacion
  const errores = []
  
const email = formData.get('email')
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

  actualizarCliente(params.clienteId,datos) ;
  return redirect('/')
}

const EditarCliente = () => {

const navigate = useNavigate()
const cliente = useLoaderData()
const errores = useActionData()

    return (
        <>
          <h1 className='font-black text-4xl text-blue-900'>Editar Clientes</h1>
          <p className='mt-10'>A continuación podras modificar los datos de un cliente.</p>
    
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
              <Formulario cliente={cliente}/>
              <input type="submit"
                className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
                value="Guardar Cambios"
              />
            </Form>
          </div>
        </>
      )
  
}

export default EditarCliente
