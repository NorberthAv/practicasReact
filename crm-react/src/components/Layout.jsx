import React from 'react'
import { Outlet,NavLink, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl text-center text-white'>CRM - Clientes</h2>

                <nav className='mt-10'>
                    <Link className={`
                ${location.pathname === '/' ? 'text-blue-300' : 'text-white'}
                 text-2xl block mt-2
                 hover:text-blue-300
                `
                    } to={"/"}>Clientes</Link>
                    {/* <Link className={`
                ${location.pathname === '/cliente/nuevo' ? 'text-blue-300' : 'text-white'}
                text-2xl block mt-2
                hover:text-blue-300
                text-white`} to="/cliente/nuevo">Nuevo Cliente</Link> */}
               <NavLink
               className={({isActive}) => isActive ? ' text-blue-300 text-2xl block mt-2' : 'text-white  text-2xl block mt-2'}
               to={'/cliente/nuevo'}
               >

               Nuevo Cliente
               </NavLink>
               
                </nav>
            </aside>

            <main
                className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div>
        // <div>
        //   <h1 className='tex-6xl font-bold'>CRM - React</h1>

        // </div>
    )
}

export default Layout
