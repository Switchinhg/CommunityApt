import React from 'react'
import { Link } from 'react-router-dom'
import estilos from './estilo.module.css'

const Navbar = () => {
    return (
    <header className={estilos.container}>
        <div>
                <img className={estilos.logo} src={"./logo.png"} alt="CommunityAPT Logo"  />
            
        </div>

        <div className={estilos.nav}>
        <Link to='/' >
            <p>Inicio</p>
        </Link>
        <Link to='/nosotros' >
            <p>Nosotros</p>
        </Link>
        <Link to='/contacto' >
            <p>Contacto</p>
        </Link>
        <Link to='/Login' >
            <p>Login</p>
        </Link>
        </div>
        </header>
    )
}

export default Navbar