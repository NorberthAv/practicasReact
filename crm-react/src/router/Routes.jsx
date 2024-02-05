import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import NuevoCliente from '../pages/NuevoCliente'
import Index, {loader as clientesLoader} from '../pages/Index'
import '../index.css'



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index:true,
                element:<Index/>,
                loader: clientesLoader,
            },
            {
                path: '/cliente/nuevo',
                element: (
                    <>
                      <NuevoCliente/>
                    </>
            )
        }
        ]
     
    },
  ])

export default Router
