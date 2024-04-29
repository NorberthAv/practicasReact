
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'
export function meta(){
  return [
    {
      tittle:'GuitarLA - Sobre Nosotros',
      description:'Pagina de Sobre Nosotros'
    }
  ]
}
export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    },
    {
      //Para Precargar la imagen con imagenes pesadas
      rel:'preload',
      href:imagen,
      as:'image'
    }
  ]
}


const Nosotros = () => {
  return (
  <main className="contenedor nosotros">
    <h2 className="heading">Nosotros</h2>
    <div className="contenido">
      <img src={imagen} alt="imagen-sobre-nosotros"/>
      <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id massa condimentum, maximus sem eu, sodales sapien. Morbi nec gravida arcu, a interdum justo. Donec pharetra lectus non suscipit ullamcorper. Integer mauris arcu, faucibus eu sem in, mattis gravida erat. Donec suscipit ante eget nunc luctus, sed commodo orci lobortis. Sed nec ante eget libero suscipit rhoncus in in nisl. Maecenas semper turpis lorem, a egestas lacus aliquam vel. Donec metus justo, fringilla nec interdum eu, ullamcorper eu est. Cras arcu risus, congue quis egestas eget, ultrices dignissim purus. Sed tempus suscipit molestie. Nam pretium aliquam nibh. Duis non venenatis massa, nec consequat neque. In scelerisque feugiat elit, ut fermentum massa accumsan vitae. Sed sed ipsum tortor. Donec erat erat, pharetra quis vestibulum in, pulvinar id magna. Quisque eleifend laoreet tincidunt.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id massa condimentum, maximus sem eu, sodales sapien. Morbi nec gravida arcu, a interdum justo. Donec pharetra lectus non suscipit ullamcorper. Integer mauris arcu, faucibus eu sem in, mattis gravida erat. Donec suscipit ante eget nunc luctus, sed commodo orci lobortis. Sed nec ante eget libero suscipit rhoncus in in nisl. Maecenas semper turpis lorem, a egestas lacus aliquam vel. Donec metus justo, fringilla nec interdum eu, ullamcorper eu est. Cras arcu risus, congue quis egestas eget, ultrices dignissim purus. Sed tempus suscipit molestie. Nam pretium aliquam nibh. Duis non venenatis massa, nec consequat neque. In scelerisque feugiat elit, ut fermentum massa accumsan vitae. Sed sed ipsum tortor. Donec erat erat, pharetra quis vestibulum in, pulvinar id magna. Quisque eleifend laoreet tincidunt.
        </p>
      </div>
    </div>
  </main>
  )
}

export default Nosotros
