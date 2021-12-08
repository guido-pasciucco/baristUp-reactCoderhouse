import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import {getFetch} from "./getFetch"

function ItemListContainer(){
    const [productos, setProductos] = useState([])
    getFetch.then(resp => setProductos(resp))    
    return(
        <><div>
            {productos.map(producto =>
                <><><>
                <div style={{border: "2px solid green", padding: "20px"}}>
                <h1 key={producto.id}>{producto.titulo}</h1>
                <img src={producto.img} style={{width: "auto", height: "250px"}}  />
                    <h5>Cat.: {producto.categoria}</h5>
                    <h2>${producto.precio}</h2><button style={{width: "200px", height: "50px"}} >Detalles</button><ItemCount /><button style={{width: "200px", height: "50px"}} >Añadir al Carrito</button>
                </div></></></>
            )}
        </div></>
    )
}

export default ItemListContainer
