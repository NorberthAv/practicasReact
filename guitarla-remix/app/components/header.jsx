import React from 'react'
import { Link, useLocation } from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
      <Link to="/" className="logo">
    <img src={Logo} alt="Logo" className="logo" />
      </Link>
    <Navegacion/>
      </div>
    </header>
  )
}

export default Header
