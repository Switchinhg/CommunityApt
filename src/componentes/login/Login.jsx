import React, { useRef, useState } from 'react'
import estilos from './login.module.css'
import { UsarAuth } from '../contextos/AuthContext'

const Login = () => {
  const [log, setLog] = useState(true)
  const [errores,setErrores]= useState('')
  const emailRef = useRef()
  const contraRef = useRef()
  function ChangeLogin (){
    setLog(!log)  
    console.log(log)
  }
  const { registrar } = UsarAuth()

  function handleSubmit(e){
    e.preventDefault()

    log?
    <>
    {registrar(emailRef.current.value, contraRef.current.value)}
    {console.log("Login")}
    </>
    
    :
    <>
      {contraRef.current.value.length  < 6? 
      setErrores('La contraseña debe ser mayor a 5 caracteres')
        :
      registrar(emailRef.current.value, contraRef.current.value)
      .finally(setErrores(''))
      
      }
      
    </>
  }

  return (
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
          <input type="text" name="nombre"  id="nombre" />
        </div>
        :null
        }
        {/* Apellido */}
        {!log?
        
        <div className={estilos.loginInput}>
          <label htmlFor="contraseña">Apellido</label>
          <input type="text" name="contraseña"  id="contraseña" />
        </div>
        : 
        null
        }
        {/* errores */}
        <div className={estilos.loginError}>
          <p className='error'>{errores}</p>
        </div>

        {/* Boton Registrar o Logear */}
        <div className="loginSend">
          <button className='Login' type='submit' name="submit" id="submit">{log?'Entrar': 'Registrar'}</button>
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