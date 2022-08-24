import React, { useEffect, useState } from 'react'
import estilos from './dashboard.module.css'
import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { UsarAuth } from '../contextos/AuthContext'

export default function Dashboard() {
  const { usuarioActivo } = UsarAuth()
  const[usuario,SetUsuario] = useState([])

  useEffect(() => {
    const db = getFirestore()
    console.log(usuarioActivo.uid)
    const usuarioFilter = query(collection(db,'usuarios'), where('UID', '==', usuarioActivo.uid))
    
    
    async function yoasd(){
      await getDocs(usuarioFilter)
      .then(resp => SetUsuario(resp.docs.map(item=>({id:item.id, ...item.data() } ) ) ) )
      }
      yoasd()    
  }, [])

  function registrarApt(){
    console.log('yo, registro APT')
  }

  
  return (
    <div className={estilos.main}>

    <div className={estilos.secciones}>
      <div className={estilos.box}>Unirse</div>
      <div onClick={()=>registrarApt()} className={estilos.box}>Administrar</div>
    </div>


      
    </div>
  )
}
