import React from "react";
import {useState} from 'react';
import {useEffect} from 'react';
import Item from "./Item";
import { useOutletContext, useParams } from "react-router-dom";
import { getProductDetail, getProductDescription } from "../services/products"

function ItemDetail() {
    const [detail, setDetail] = useState(null)

   
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