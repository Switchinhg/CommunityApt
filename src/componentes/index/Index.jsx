import React from 'react'
import Footer from '../footer/Footer'
import estilos from './index.module.css'

const Index = () => {
  return (
    <>
    <div className={estilos.container }>
      
        <img src={"./apartamentos.png"} alt="" />

      <div className={estilos.texto}>
        <p>En CommunityAPT trabajamos para darle a todos los administradores de apartamentos un sistema donde manejarlo sea más facil, ya sea quejas, mandar comunicados o avisos, todo en una plataforma </p>
      </div>


    </div>
    <Footer />
    </>
  )
}

export default Index