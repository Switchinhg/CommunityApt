import React from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import estilos from './cargando.module.css'

export default function Cargando() {
  return (
    <div className={estilos.full}>

        <PulseLoader
        color="black"
        size={50}
        />

    </div>
  )
}
