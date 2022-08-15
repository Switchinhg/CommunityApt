// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import estilos from './navbar.module.css'
import { UsarAuth } from '../contextos/AuthContext'

const Navbar = () => {
    const { usuarioActivo } = UsarAuth()
    const { delog } = UsarAuth()

    
    return (
    <header className={estilos.container}>
        <Link to={usuarioActivo? '/dashboard': '/'} >
                <img className={estilos.logo} src={"./logo.png"} alt="CommunityAPT Logo"  />
        </Link>
            
        

        <div className={estilos.nav}>
     {/*    <Link to='/' >
            <p>Inicio</p>
        </Link>
        <Link to='/nosotros' >
            <p>Nosotros</p>
        </Link>
        <Link to='/contacto' >
            <p>Contacto</p>
        </Link> */}
        <p>Hola {usuarioActivo?usuarioActivo.email:null}</p>
      
        {usuarioActivo?
            <p className='boton' onClick={delog}>Salir</p>
        :
        
        <Link to='/Login' >
            <p className='boton'>ENTRAR</p>
        </Link>
        }
        </div>
        </header>
    )
}

export default Navbar