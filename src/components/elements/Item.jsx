import { useState, useEffect, useMemo } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import ItemDetailContainer from "../sections/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Item = ({ product }) => {
    const {title, thumbnail, attributes, price} = product
    const [cleanAttributes, setCleanAttributes] = useState([])
    const whiteListAttributes = useMemo(() =>  ["Marca", "Modelo"], []);

    const filterAttributes = () => {
        let newAttributes = attributes.filter(attribute => whiteListAttributes.includes(attribute.name))
        setCleanAttributes(newAttributes)
    }
    useEffect(filterAttributes, [attributes, whiteListAttributes])

    
    return (
        <Card >
            <Card.Img style={{ marginTop: 10, height: '110px', with: "100%", objectFit: "contain" }} variant="top" src={thumbnail} />
            <Card.Body style={{ textAlign: "left" }}>
                <Card.Text style={{ height: 40 }}>
                    {title}
                </Card.Text>
                <Card.Title>
                    ${price}
                </Card.Title>          
            </Card.Body>                        
            <ListGroup variant="flush">
                {cleanAttributes.map( (attribute, index) => {
                    return <ListGroup.Item key={index}>{attribute.name} {attribute.value_name}</ListGroup.Item>
                })}
            </ListGroup>             
            <Button variant="primary" style={{ backgroundColor: "#61dafb" }}>
                <Link style={{ color: "black", textDecoration: "none" }} to={`detail/${product.id}`}>Ver detalle del producto</Link>
            </Button>             
        </Card> 
    )
}

export default Item;

