

const Cliente = ({ cliente }) => {
    const {nombre, empresa, email, telefono, id} = cliente
    return (

        <tr>
            <td className='p-6'>{nombre}</td>
            <td className='p-6'>{telefono}</td>
        </tr>
    )
}

export default Cliente
