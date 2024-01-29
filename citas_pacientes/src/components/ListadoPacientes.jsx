
import { useEffect } from "react"
import Paciente from "./Paciente"
const ListadoPacientes = ({ pacientes, setPaciente ,eliminarPaciente }) => {

  // useEffect(() =>{
  //   console.log('se agrego un nuevo paciente')
  // },[pacientes])

  return (
    <div className='md:w-full lg:w-3/5 text-justify md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ?
        (<>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 tex-center">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {
            pacientes.map((paciente) => {
              return (<Paciente
                key = {paciente.id}
                setPaciente = {setPaciente}
                paciente={paciente} 
                eliminarPaciente = {eliminarPaciente}
                />)
            })
          }
        </>
        )
        : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 tex-center">
              Comienza agregando pacientes {' '}
              <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
            </p>
          </>
        )}



    </div>

  )
}

export default ListadoPacientes
