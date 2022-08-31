import React from 'react'
import ReactDom from 'react-dom'
import estilos from './modal.module.css'

export default function Modal({children, onClose}) {
  return ReactDom.createPortal(
        <div className={estilos.portalContainer} >
            <div className={estilos.portal}>
              
              <div className={estilos.alignCruz}>
                <button className={estilos.boton} onClick={onClose}>X</button>
              </div>
              
                
                {children}
            </div >
        </div>,
    document.getElementById('portal')
  )
}
