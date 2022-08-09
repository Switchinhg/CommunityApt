import React from 'react'
import { Link } from 'react-router-dom'
import estilos from './navbar.module.css'

const Navbar = () => {
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
        <Link to='/Login' >
            <p className='boton'>ENTRAR</p>
        </Link>
        </div>
        </header>
    )
}

export default Navbar