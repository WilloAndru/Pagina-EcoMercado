import React from 'react'

function BotonFlecha({content="←", type="izquierda"}) {
  return (
    <button className="flecha">{content}</button>
  )
}

export default BotonFlecha