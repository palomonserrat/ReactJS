import React from "react";
import {useState} from 'react';
import {useEffect} from 'react';
import Item from "./Item";

const getItem = new Promise(resolve =>{setTimeout(()=>{
    resolve(ItemDetail())
},2000)
})

function ItemDetail() {
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        getItem.then(res =>setDetail(res))
    }, [])

    if(detail == null){
        return(
            <div>Cargando Detalle...</div>
        )
    }

    return (
        <div>
            <h2>Detalle</h2>
            <div className='container'>
                <div className='row'>
                    <p>Detalle</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;