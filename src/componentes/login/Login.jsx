import React, { useState } from 'react'
import estilos from './login.module.css'
  

const Login = () => {
  const [log, setLog] = useState(true)
  function ChangeLogin (){
    setLog(!log)  
    console.log(log)
}

  return (
    <div className={estilos.wrapper}>
      <h1>{log?'ENTRAR':'REGISTRARSE'}</h1>
      {/* Marco */}
      <form className={estilos.box}>
        {/* Email */}
        <div className={estilos.loginInput}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required/>
        </div>

        {/* Contraseña */}
        <div className={estilos.loginInput}>
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" name="contraseña"  id="contraseña" />
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
          <p className='error'></p>
        </div>

        {/* Boton Registrar o Logear */}
        <div className="loginSend">
          <button className='Login' type='submit' name="submit" id="submit">{log?'Entrar': 'Registrar'}</button>
        </div>
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