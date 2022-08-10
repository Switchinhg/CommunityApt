import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import estilos from './navbar.module.css'
import { UsarAuth } from '../contextos/AuthContext'

const Navbar = () => {
    const { usuarioActivo } = UsarAuth()
    
    return (
    <header className={estilos.container}>
        <Link to={'/'} >
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
        <p onClick={console.log(usuarioActivo)}>Hola {usuarioActivo.email}</p>
        <Link to='/Login' >
            <p className='boton'>ENTRAR</p>
        </Link>
        </div>
        </header>
    )
}

export default Navbar