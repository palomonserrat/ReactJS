import React from "react";
import Item from "./Item";
import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const promesa = new Promise(resolve =>{setTimeout(()=>{
    const products = [
        {
            id: 1,
            nombre: "Addictive cream",
            ingredientes: "Oreo, Limón, Topping"
    
        },
        {
            id: 2,
            nombre: "Kiwi sensation",
            ingredientes: "Kiwi, Pistacho, Topping"
        },{
            id: 6,
            nombre: "Fresh blueberry",
            ingredientes: "Arandano, Frambuesa, Topping"
        }]
        resolve(products)
},2000)
})

function ItemList() {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        promesa.then(res =>setProductos(res))
    }, [])

    if(productos == null){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h2>Products</h2>
            <div className='container'>
                <div className='row'>
                    {
                        productos.map(product =>(
                            <div className='col-md-4' key={product.id}>
                                <Item nombre={product.nombre} ingrediente={product.ingredientes}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemList