import React from 'react'

function Productos({imagen, nombre, precio}) {
  return (
    <button className="producto">
        <img className="imgCamion" src="camion.png"/>
        <img className="productoImg" src={imagen}/>
        <p className="precios">{precio}</p>
        <p className="nombreProducto">{nombre}</p>
    </button>       
  )
}

export default Productos