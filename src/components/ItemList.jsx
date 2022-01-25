import React from "react";
import Item from "./Item";
import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col  } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";

const ItemList = ({products}) => {
    return (
        <>
            {products.map((product) => (
                <Col key={product.id}>
                    <Item key={product.id} product={product} />
                </Col>
            ))}
        </>
    )
}

export default ItemList;

