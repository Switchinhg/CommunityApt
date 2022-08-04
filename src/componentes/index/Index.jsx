import React from 'react'
import estilos from './estilo.module.css'

const Index = () => {
  return (
    <div className={estilos.container}>
      
      <div className={estilos.img} style={{backgroundImage: `url(${process.env.PUBLIC_URL + './logo.png'})`}}>
      </div>

      <div className={estilos.texto}>
        <p>Servicio para administrar apartamentos desde la web </p>
      </div>


    </div>
  )
}

export default Index