import React from 'react'
import { useEffect } from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


    const handleEliminar = () => {
        const respuesta = confirm('Deseas Eliminar este Paciente');

        if(respuesta){
            eliminarPaciente(paciente.id); 
        }
    }

    return (
   
            <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                    <span className="font-normal normal-case">{paciente.nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                    <span className="font-normal normal-case">{paciente.propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                    <span className="font-normal normal-case">{paciente.email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {' '}
                    <span className="font-normal normal-case">{paciente.alta}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                    <span className="font-normal normal-case">{paciente.sintomas}</span>
                </p>
                <div className='flex justify-between mt-10'>
                    <button 
                    onClick={()=> setPaciente(paciente)}
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white fond-bold rounded-md' type='button'>
                        Editar
                    </button>
                    <button 
                    onClick={handleEliminar}
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white fond-bold rounded-md' type='button'>
                        Eliminar
                    </button>
                </div>
            </div>
 
    )
}

export default Paciente
