import { useContext } from 'react';
import carrito from '../assets/img/carritoDeCompras.png';
import { CartContext } from '../contexts/CartContext';

const CartWidget = (props) => {
    
    
    const numOfItem=useContext(CartContext)
    
    return(
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
            borderRadius: "20%"}}>{numOfItem.cart.length}</div>
        </div>
    )
}

export default CartWidget