import React from 'react'
import "./SeccionAvisos.css"

function SeccionAvisos() {
  return (
    <section id="seccionAvisos">
        <div className="seccionAvisosDiv" id="ecoPro">
            <div id="ecoProDiv1">
                <img src="caballo.png"/>
                <img src="silla.png"/>
                <img src="taladro.png"/>
            </div>
            <div id="ecoProDiv2">
                <h2>EcoMercado Pro</h2>
                <p>¿Tienes un articulo y quieres empezar a vender online?</p>
                <button className="botonVerde">Más información</button>
            </div>
        </div>
        <div className="seccionAvisosDiv" id="app">
            <div id="app1">
                <h2>¿Quieres la app? Descárgala ahora</h2>
            </div>
            <div id="app2">
                <img src="codigoQR.png"/>
            </div>
        </div>
    </section>
  )
}

export default SeccionAvisos