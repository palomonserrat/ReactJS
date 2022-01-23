import React from "react";
import Item from "./Item";
import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList() {
    const [producto, setProducts] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const users = await data.json()
        setProducts(users)
    }

    return (
        <div>
            <ul>
                {
                    producto.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))

                }
            </ul>
        </div>
    )
}

export default ItemList