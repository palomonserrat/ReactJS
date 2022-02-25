import { Button, Card, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import ItemCount from "./ItemCount";
import { Context } from "../contexts/CartContext";

const ItemDetail = ({id, titulo, imagen, precio, stock, descr}) => {
    const [comprar, setComprar] = useState(false)
    const {onAdd} = useContext(Context)

    const agregarAlCarrito = (props) => {
        setComprar(true)
        onAdd({id, titulo, precio, imagen}, props.unidades)
    }

    return (
        <Container className="col-12 col-md-12 col-lg-12 d-flex justify-content-center my-3">
            <Card className="card p-3 bg-light rounded-3">
                <Card.Img className="rounded-3" variant="top" src={imagen} alt={titulo} style={{width: "250px", display: "block", alignSelf:"center"}} />
                <Card.Body>
                    <Card.Title className="text-center">{titulo}</Card.Title>
                    <Card.Subtitle className="p-2" style={{ textAlign: "center" }}><strong>$ {precio}</strong></Card.Subtitle>
                    <Card.Text className="text-center">{descr}</Card.Text>
                     
                    <div className="container d-flex justify-content-center">
                        { !comprar ? <ItemCount stock = {stock} onAdd ={agregarAlCarrito} />: <Button as={Link} to='/cart' className="col-4" variant="danger">Terminar compra</Button>}
                    </div>
               </Card.Body>
      </Card>
    </Container > 
    )
}

export default ItemDetail;