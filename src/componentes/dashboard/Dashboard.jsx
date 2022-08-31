import React, { useEffect,useRef, useState } from 'react'
import estilos from './dashboard.module.css'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { UsarAuth } from '../contextos/AuthContext'
import Modal from '../modal/Modal'

export default function Dashboard() {
  const { usuarioActivo ,usr } = UsarAuth()
  const[usuario,SetUsuario] = useState({})
  const [abierto, setAbierto] = useState(false)
  const [edificio, setEdificio] = useState({})
  const nombreEdificio = useRef()
  const dirEdificio = useRef()
  const numEdificio = useRef()

  useEffect(() => {
    const db = getFirestore()
    const usuarioFilter = query(collection(db,'usuarios'), where('UID', '==', usuarioActivo.uid))

    async function buscarUsuario(){
      await getDocs(usuarioFilter)
      .then(resp => SetUsuario(resp.docs.map(item=>({ ...item.data() } ) ) ) )
      }
      buscarUsuario()    
  }, [usuarioActivo.uid])

  useEffect(()=>{
    console.log('usuario')
    console.log(usuario)
    console.log('datos')


  },[usuario])


function registrarApt2(){
  console.log(usuarioActivo.uid)
  edificio.administradores={
    ...edificio.administradores,
    [usuario.nombre]:usuarioActivo.uid
  }
  console.log('edificio')
  console.log(edificio)
  console.log('usuario2')
  console.log(usuario)
 
}

  const registrarApt = e =>{
    e.preventDefault()

    setEdificio({datos:{nombre:nombreEdificio.current.value,direccion:dirEdificio.current.value,numero:numEdificio.current.value},administradores:{[usuario.nombre]:usuarioActivo.uid}})
    console.log(edificio)
    SetUsuario({...usuario,edificios: {...edificio}})
    console.log(usuario)
    console.log('datos')
    console.log(usuario.edificios?usuario.edificios:null)
  }

  
  return (
    <div className={estilos.main}>


    {
      usuario.administrados || usuario.edificios?
      <div>
       {/* {usuario.edificios.datos.map(e=> 
        <li>{e.nombre}</li>
        )} */}
        <button onClick={registrarApt2}>asdas</button>
      </div>
      :
      abierto?
      <Modal abierto={abierto} onClose={()=> setAbierto(!abierto)}>
        Registro
        <form className={estilos.info} onSubmit={registrarApt}>
          <div >
            <label htmlFor="nombreEdificio">Nombre del edificio</label>
            <input type="text" id='nombreEdificio' name='nombreEdificio' placeholder='ej: el patrón' ref={nombreEdificio}/>
          </div>
          <div>
            <label htmlFor="dirEdificio">Dirección del edificio</label>
            <input type="text" id='dirEdificio' name='dirEdificio' placeholder='ej:rivera y comercio' ref={dirEdificio}/>
          </div>
          <div>
            <label htmlFor="numContacto">Número de contacto del edificio</label>
            <input type="number" id='numContacto' name='numContacto' placeholder='ej:095360468'  ref={numEdificio}/>
          </div>
          <div>
            <input className={estilos.enviar} type="submit" id='dirEdificio' name='dirEdificio' value={'Registrar Edificio'} />
          </div>
        </form>
        
      </Modal>
      :

      <div className={estilos.secciones}>
        <div onClick={()=>registrarApt2()} className={estilos.box}>Unirse</div>
        <div onClick={()=>setAbierto(!abierto)} className={estilos.box}>Administrar</div>
      </div>

        
      

  }
   


      
    </div>
  )
}
