import React from "react";
import ItemList from "../elements/ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";


const ItemListContainer = ({ products }) => {
    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-1">
                <ItemList products={products} />
            </Row>
        </Container>
    )
}

export default ItemListContainer;