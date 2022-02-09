import React, {useContext, Fragment, useState} from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";


const Cart = ({ product }) => {

    const { addItem } = useContext(CartContext);
    
    const { title, description, price, sold_quantity, warranty, attributes, pictures, available_quantity} = product
    const [itemsQty, setItemsQty] = useState(0);
      
    return (
        <Container>
            <Row>
                <Col lg={12}>
                        <Card.Body className="store-body">
                            <Row>
                                <Col xs={7} className="product-info">
                                    <Col className="product-gallery">
                                        <Col className="product-gallery-thumbnails">
                                            <ol className="thumbnails-list list-unstyled">
                                                {pictures.slice(0, 6).map(picture => { return (<li> <img src={picture.secure_url} alt="" /></li>)})}
                                            </ol>
                                        </Col>
                                        <Col xs={10} className="product-gallery-featured">
                                            {pictures.length > 0 ? <img src={pictures[0].secure_url} alt="" /> : null}
                                        </Col>
                                    </Col>
                                    <Col classNa
                                    me="product-seller-recommended">
                                        <Col className="product-description mb-5" style={{textAlign: "left"}}>
                                            <dl className="row mb-5">
                                                {attributes.slice(0, 8).map(attribute => { return(<>
                                                    <dd className="col-sm-8">{attribute.name}</dd>
                                                <dt className="col-sm-4">{attribute.value_name}</dt>                                                
                                                </>) })}
                                            </dl>
                                            <h2 className="mb-5">Descripción</h2>
                                            {description}
                                        </Col>
                                    </Col>
                                </Col>
                                <Col className="product-payment-details">
                                    <p className="last-sold text-muted"><small>{sold_quantity} vendidos</small></p>
                                    <h4 className="product-title mb-2">{title}</h4>
                                    <h2 className="product-price display-4">$ {price}</h2>
                                    <p className="text-success"><i className="fa fa-credit-card"></i> 12x or  5x $ 5.00</p>
                                    <p className="mb-0"><i className="fa fa-truck"></i> Tipo de Garantia</p>
                                    <div className="text-muted mb-4"><small>{warranty}</small></div>                              
                                    <label for="quant">Cantidad</label>
                                    <div className="mb-3">
                                        <ItemCount itemsQty={itemsQty} available_quantity={available_quantity} setItemsQty={setItemsQty} />
                                    </div>
                                    <Button onClick={() => addItem(product, itemsQty)} variant="primary">Agregar al carrito</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                </Col>
            </Row>
        </Container>
    )

};

export default Cart;