import React from 'react'

function CategoriasBoton({imagen, nombre}) {
  return (
    <button>
        <img src={imagen}/>
        <p>{nombre}</p>
    </button>
  )
}

export default CategoriasBoton