import React from 'react'
import styled from '@emotion/styled'


const Resultados = styled.div`
display: flex;
color: #FFF;
font-family: 'Lato',sans-serif;
align-items: center;
gap: 1rem;
margin-top: 30px;
`
const Texto = styled.p`
font-size: 18px;
span{
    font-weight: 700;
}
`
const Precio = styled.p`
font-size: 24px;
span{
    font-weight: 700;
}
`
const Imagen = styled.img`
display: block;
width: 35%;
`

const Resultado = ({resultado}) => {

    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado
  return (
    <Resultados>
        <Imagen src={`https://www.cryptocompare.com/media/${IMAGEURL}`} alt="Imagen Cripto" />
      <div>
      <Precio>El Precio es de: <span>{PRICE}</span></Precio>
      <Texto>El Precio mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
      <Texto>El Precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
      <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
      </div>

    </Resultados>
  )
}

export default Resultado
