import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
/* creamos contexto */

const AuthContext = createContext([]);
/* Usar Contexto */
export const UsarAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [usuarioActivo, setUsuarioActivo] = useState();

  /* Funcion para logear al usuario */
  function registrar(email, contraseña) {
    return createUserWithEmailAndPassword(auth,email, contraseña)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      setUsuarioActivo(user)
    })
    return unsubscribe
  }, [])
  


  const value = {
    usuarioActivo,
    registrar
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
