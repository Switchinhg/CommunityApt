import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
/* creamos contexto */

const AuthContext = createContext([]);
/* Usar Contexto */
export const UsarAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const db = getFirestore()
  const [usuarioActivo, setUsuarioActivo] = useState();
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  /* Funcion para registrar al usuario */
  async function registrar(email, contraseña , nombre, apellido ) {
  return createUserWithEmailAndPassword(auth, email, contraseña)
      .then(cred=> {
            const usuario = {
                  nombre,
                  apellido,
                  email,

                  UID: cred.user.uid
            }
            setDoc(doc(db, "usuarios", cred.user.uid), usuario)
            // para Leer data getDoc(doc(db, 'usuarios', cred.user.uid))
      })
  }
  /* Pra logear al usuario */
  async function login(email,contraseña){
    return signInWithEmailAndPassword(auth, email,contraseña)
    .then(() => {
        navigate('/inicio')
      })
  }
  /* para delogear al usuario */
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
    registrar,
    login,
    delog
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
