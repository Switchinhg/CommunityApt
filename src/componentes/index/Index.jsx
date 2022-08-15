import React, { useEffect } from 'react'
import {useNavigate}from 'react-router-dom'
import Footer from '../footer/Footer'
import estilos from './index.module.css'
import { UsarAuth } from '../contextos/AuthContext'

const Index = () => {
  
  const { usuarioActivo } = UsarAuth()
  const navigate = useNavigate()



  useEffect(() => {
    if(usuarioActivo){
      navigate("/dashboard")
    }
  }, [])
  

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