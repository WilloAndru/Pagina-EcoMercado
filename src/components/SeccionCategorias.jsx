import React from 'react'
import BotonFlecha from './BotonFlecha'
import CategoriasBoton from './CategoriasBoton'
import categorias from "../datas/categorias";
import "./SeccionCategorias.css"

function SeccionCategorias() {
  const categoriasList = categorias.map(i => {
    return (
        <CategoriasBoton imagen={i.img} nombre={i.name}/>
    )
  })  
  return (
    <section id="seccionCategorias">
        <BotonFlecha/>
        <div id="categorias">
          {categoriasList}
        </div>
        <BotonFlecha content='→' type='derecha'/>
    </section>
  )
}

export default SeccionCategorias