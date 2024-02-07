import React from 'react'
import BotonFlecha from './BotonFlecha'
import productosPopular from '../datas/productosPopular'
import Productos from './Productos'
import "./SeccionPopular.css"

function SeccionPopular() {
    const productosPopularList = productosPopular.map(i => {
        return (
            <Productos imagen={i.img} nombre={i.name} precio={i.precio}/>
        )
        })  
    return (
        <section id="seccionPopular">
            <BotonFlecha/>
            <div id='seccionPopularDiv'>        
            {productosPopularList}
            </div>
            <BotonFlecha content='→' type='derecha'/>
        </section>
    )
}

export default SeccionPopular