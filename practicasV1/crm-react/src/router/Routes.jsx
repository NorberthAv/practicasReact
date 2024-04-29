import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import NuevoCliente,{action as nuevoClienteAction} from '../pages/NuevoCliente'
import Index, {loader as clientesLoader} from '../pages/Index'
import ErrorPage from '../components/ErrorPage'
import EditarCliente, {loader as editClienteLoader, action as editarClienteAction} from '../pages/EditarCliente'
import {action as eliminarClienteAction} from '../components/Cliente'
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
                errorElement:<ErrorPage/>
            },
            {
                path: '/cliente/nuevo',
                element: ( <NuevoCliente/> ),
                action:nuevoClienteAction,
                errorElement:<ErrorPage/>
            },
            {
                path: '/cliente/:clienteId/editar',
                element: ( <EditarCliente/> ),
                loader: editClienteLoader,
                action: editarClienteAction,
                errorElement:<ErrorPage/>
       
            },
            {
                path: '/cliente/:clienteId/eliminar',
                action: eliminarClienteAction,
                errorElement:<ErrorPage/>
       
            }
        ]
     
    },
  ])

export default Router
