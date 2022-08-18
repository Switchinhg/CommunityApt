// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import estilos from './navbar.module.css'
import { UsarAuth } from '../contextos/AuthContext'
import { useState } from 'react'
import {useNavigate}from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const { usuarioActivo } = UsarAuth()
    const { delog } = UsarAuth()
    const [clas, setclas] = useState(false)

    async function delogs (){
      await delog()
      navigate('/login')
      setclas(false)

    }

    const click = () =>{
      setclas(!clas)
    }
    

    return (
    <header className={estilos.container}>
        <Link to={usuarioActivo? '/inicio': '/'} >
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
      
        {usuarioActivo?
        <>
            <button className='boton botonMenu' onClick={click}>Menú</button>
          <ul className={`${estilos.dropdown} ${clas? estilos.show: estilos.notshow} `}>
            <button className={estilos.item}>Perfil</button>
            <button className={estilos.item} onClick={()=>delogs() }>Salir</button>
          </ul>
        
        </>

              


            // <p className='boton' onClick={delog}>Salir</p>
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