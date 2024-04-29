import { useLoaderData} from "@remix-run/react"
import { getGuitarra } from "~/API/guitarras.server"
import Parrafos from "~/components/parrafosStrappi"
import styles from '~/styles/guitarras.css'
export async function loader({request,params}){
const {guitarraUrl} = params

const guitarra = await getGuitarra(guitarraUrl)

if(guitarra.data.length == 0){
  throw new Response('',{
    status:404,
    statusText:'Guitarra no encontrada'
  })
}
  return guitarra
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
  
}

export function meta({data}){
 return [
    {
      tittle:`GuitarLA - ${data.data[0].attributes.nombre}`,
      description:`Guitarras, venta de guitarras, guitarra - ${data.data[0].attributes.nombre}`
    }
  ]
}


const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre,descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
<main className="contenedor guitarra">
  <img src={imagen.data.attributes.url} className="imagen" alt={`imagen de la guitarra ${nombre}`} />
<div className="contenido">
  <h3>{nombre}</h3>
  <div className="texto"> {descripcion.map((Text,descripcionIndex) =>
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
        <p className="precio">Bs. {precio}</p> 

</div>
</main>
  )
}

export default Guitarra
