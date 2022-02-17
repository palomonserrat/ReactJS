import { useContext } from "react";
import carrito from '../assets/img/carritoDeCompras.png';
import { Link } from "react-router-dom";
import { Context } from "../contexts/CartContext";
import { Container } from "react-bootstrap";

const CartWidget = (props) => {
    
    const { unidadesSeleccionadas } = useContext(Context)
    
    return(
        <Container as={Link} to="/cart">
            <div style={{position: "relative", marginLeft: 6}}>
            <img style={{width: 40}} src={carrito} />
            <div style={{color: "#fff", 
            marginLeft: 6, 
            fontWeight: "bold", 
            position: "absolute", 
            left: 6, 
            top: -2, 
            fontSize: "0.6rem", 
            backgroundColor: "#ba000d", 
            paddingTop: "2px", 
            paddingBottom: "2px", 
            paddingLeft: "5px", 
            paddingRight: "4px", 
            borderRadius: "20%"}}>{unidadesSeleccionadas}</div>
        </div>
        </Container>
        
    )
}

export default CartWidget;