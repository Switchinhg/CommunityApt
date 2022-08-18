import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, updateProfile } from 'firebase/auth'
/* creamos contexto */

const AuthContext = createContext([]);
/* Usar Contexto */
export const UsarAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [usuarioActivo, setUsuarioActivo] = useState();
  const [loading, setLoading] = useState(true)

  async function registyCambiarInfo(email, contraseña, nombre, apellido){
    await registrar(email,contraseña)
    await cambiarInfo(nombre, apellido)
    .then(auth.onAuthStateChanged(user=>{
      setUsuarioActivo(user)
    }))
  }
  /* Funcion para logear al usuario */
  function registrar(email, contraseña ) {
    return createUserWithEmailAndPassword(auth,email, contraseña)
  }
  function cambiarInfo(nombre,  apellido){
    return updateProfile(auth.currentUser, {
      displayName:nombre + ' '+ apellido
    })
    
  }
  function login(email,contraseña){
    return signInWithEmailAndPassword(auth, email,contraseña)
  }
  function delog(){
    return signOut(auth)
  }
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user=>{
        setUsuarioActivo(user)
        setLoading(false)
      })
      return unsubscribe
    }, [])
  


  const value = {
    usuarioActivo,
    registyCambiarInfo,
    registrar,
    cambiarInfo,
    login,
    delog
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
