import React, { useEffect, useRef, useState } from 'react'
import {useNavigate}from 'react-router-dom'
import estilos from './login.module.css'
import { UsarAuth } from '../contextos/AuthContext'
import MoonLoader from "react-spinners/ClipLoader";


const Login = () => {
  const [log, setLog] = useState(true)
  const [cargando, setCargando] = useState(false)
  const [errores,setErrores]= useState('')
  const emailRef = useRef()
  const contraRef = useRef()
  const nombreRef = useRef()
  const apellidoRef = useRef()
  const navigate = useNavigate()
  function ChangeLogin (){
    setLog(!log)
  }
  const { login, registrar, usuarioActivo } = UsarAuth()

  useEffect(() => {
    
    if(usuarioActivo){
      navigate('/dashboard')
    }
    
  }, [navigate, usuarioActivo])
  

  

  async function handleSubmit(e){
    
    setErrores('')
    e.preventDefault()

    if(log){
      try{
        setCargando(true)
        await login(emailRef.current.value, contraRef.current.value)


      }catch(r){
        setErrores( 'Contraseña o Usuario incorrecto')
      }
    

    }else{
      if(contraRef.current.value.length  < 6){
        setErrores('La contraseña debe ser mayor o igual a 6 caracteres')

      }else{
        try{
          setCargando(true)
          await registrar(emailRef.current.value, contraRef.current.value, nombreRef.current.value , apellidoRef.current.value)
          navigate('/inicio')
        }
        catch(r){
          setErrores('Contraseña o Usuario incorrecto')

        }
      }
    }

      setCargando(false)
  }

  return (
    usuarioActivo?
    null :
    <div className={estilos.wrapper}>
      <h1>{log?'ENTRAR':'REGISTRARSE'}</h1>
      {/* Marco */}
      <form className={estilos.box} onSubmit={handleSubmit}>
        {/* Email */}
        <div className={estilos.loginInput}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={emailRef} required/>
        </div>

        {/* Contraseña */}
        <div className={estilos.loginInput}>
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" name="contraseña"  id="contraseña" ref={contraRef} required />
        </div>
        {/* Nombre */}

        {!log?
        <div className={estilos.loginInput}>
          <label htmlFor="contraseña">Nombre</label>
          <input type="text" name="nombre"  id="nombre" ref={nombreRef} />
        </div>
        :null
        }

        {/* Apellido */}
        {!log?
        <div className={estilos.loginInput}>
          <label htmlFor="contraseña">Apellido</label>
          <input type="text" name="apellido"  id="apellido" ref={apellidoRef} />
        </div>
        : 
        null
        }

        {/* errores */}
        <div className={estilos.loginError}>
          <p className='error'>{errores}</p>
        </div>

        {/* Boton Registrar o Logear */}
        <div className={estilos.loginSend}>
            {cargando? 
            <MoonLoader color="#74D7ED" cssOverride={{}} loading={cargando} size={35} speedMultiplier={1} />
            :
            <button  className='Login' type='submit' name="submit" id="submit">{log?'Entrar': 'Registrar'}</button>
          }
        </div>
        {/* Metodos Login */}


        {/* Ya tenés cuenta? */}
          {log?
          <div className={estilos.register}>
            <p>---------------------------------</p>
            <p>No tenés cuenta?</p>
            <div className="cambiarRegister">
              <p onClick={ChangeLogin} className={estilos.botonLink}>Click Aquí!</p>
            </div>
          </div>
          :
          <div className={estilos.register}>
            <p>---------------------------------</p>
            <p>Ya tenés cuenta?</p>
            <div className="cambiarRegister">
              <p onClick={ChangeLogin} className={estilos.botonLink}>Click Aquí!</p>
            </div>
          </div>

          }
      </form>
    </div>
  )
}

export default Login