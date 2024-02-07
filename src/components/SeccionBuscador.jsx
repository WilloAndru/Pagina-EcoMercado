import React from 'react'
import "./SeccionBuscador.css"
import BotonVerde from './BotonVerde'

function SeccionBuscador() {
  return (
    <section id="seccionBuscador">
        <div id="barraBuscador">
            <img src="lupa.png"/>
            <input placeholder="Busca lo que quieras"/>
        </div>
        <BotonVerde content="Buscar"/>
    </section>
  )
}

export default SeccionBuscador