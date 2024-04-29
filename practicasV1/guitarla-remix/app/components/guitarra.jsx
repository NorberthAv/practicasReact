import { Link } from '@remix-run/react'
import Parrafos from './parrafosStrappi'
const Guitarra = ({ guitarra }) => {
  console.log(guitarra)
  const { imagen, nombre, precio, url, descripcion } = guitarra

  console.log(imagen.data.attributes.formats.medium.url)
  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
       <div className='descripcion'> {descripcion.map((Text,descripcionIndex) =>
          Text.children.map(
            (parrafo, index) => (
              <Parrafos 
              key={`${descripcionIndex}-${index}`}
              text={parrafo.text} 
              bold={parrafo.bold} 
              underline={parrafo.underline} />
            )
          )

        )}
        </div>
        <p className='precio'>Bs.{precio}</p>
        <Link to={`/guitarras/${url}`} className='enlace'>Ver Producto</Link>
      </div>

    </div>
  )
}

export default Guitarra
