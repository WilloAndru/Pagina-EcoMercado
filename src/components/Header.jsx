import React from 'react'
import Titulo from './Titulo'
import BotonVerde from './BotonVerde'
import "./Header.css"

function Header() {
  return (
    <header>
      <div>
        <img className="ecoIcono" src="eco.png"/>
        <Titulo content="EcoMercado"/>
      </div>
      <div>
        <BotonVerde content="Inicia sesion o Registrate"/>
        <BotonVerde content="Publicar producto"/>
      </div>
    </header>
  )
}

export default Header