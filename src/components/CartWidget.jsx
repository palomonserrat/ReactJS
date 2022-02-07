import { useContext } from 'react';
import { cartImg } from '../assets/cartImg.png';
import { CartContext } from './CartContext';


const CartWidget = () => {
    
    const { items } = useContext(CartContext);
    
    return(
        <div style={{position: "relative", marginLeft: 6}}>
            <cartImg />
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
            borderRadius: "20%"}}>{items.length}</div>
        </div>
    )
}

export default CartWidget