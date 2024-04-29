import React from 'react'
import '../css/cargando.css'
import styled from '@emotion/styled'

const Contenedor = styled.div`
margin-top: 15px;
padding: 2%;
`

const Cargando = () => {
  return (
    <Contenedor>
    <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
    </div>
    </Contenedor>
  )
}

export default Cargando
