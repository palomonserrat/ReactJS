import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function ItemCount() {
    const [itemsQty, setItemsQty] = useState(0);
    const stock = 8;

    function decrementCount() {
        setItemsQty(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setItemsQty(prevCount => prevCount + 1)
    }

    return(
        <section style={{ marginBottom: 10 }}>
            <Button onClick={()=>{if(itemsQty>0){decrementCount()}}} variant="success">-</Button>
            <span style={{ margin: 10, fontSize: "3rem" }}>{itemsQty}</span>
            <Button onClick={() =>{if(itemsQty<stock){incrementCount()}else{alert("producto sin stock")}}} variant="success">+</Button>
        </section>
    )
}

export default ItemCount;