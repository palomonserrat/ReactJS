import { useContext, useState } from 'react';
import { Context } from "../contexts/CartContext";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../elements/CartItem";
import { getFirestore } from "../../firebase";
import "firebase/firestore";

const Cart = () => {
    const { cart, precioTotal, clearCart } = useContext(Context);
    const [orderId, setOrderId] = useState(null)
    const [orderDate, setOrderDate] = useState(null)
    
    const finishOrder = async () => {
      const user = {
        nombre: "Paloma",
        email: "email@test.com",
        telefono: "123456789",
      }
  
      const itemsCart = cart.map((item) => ({
        id: item.id,
        title: item.titulo,
        quantity: item.cantidad
      }))
      await newOrder(itemsCart, user)
    }
  
    const newOrder = async (itemsCart, user) => {
      const db = getFirestore()
      const orders = db.collection("orders")
      const order = {
        buyer: user,
        items: itemsCart,
        date: new Date().toLocaleDateString(),
        precioTotal: precioTotal,
      }
      try {
        const { id } = await orders.add(order)
        setOrderId(id)
        setOrderDate(order.date)
  
        clearCart()
      } catch (err) {
        console.log(err);
      }
    }
  
    if (cart.length === 0 && orderId === null) {
      return (
        <h2 className="carroVacio">No hay productos seleccionados en el carrito</h2>
      )
    } else if (orderId !== null) {
      return (
        <div className="compraFin">
        <p className="compraMensaje">¡Gracias por tu compra!</p>
          <p className="ordenFin">Orden: {orderId}</p>
          <p className="ordenFin">La fecha de compra es:  {orderDate}</p>
          <Button as={Link} to="/" className="botonCompra" >Volver a Home</Button>
        </div>
        
      )
    } else if (cart.length > 0) {
      return (
        <div>
          <Container className="container align-top justify-content-center p-2 text-center ">
            <Container>
              {cart.map((item) =>
                <CartItem
                  key={`cart-${item.id}`}
                  id={item.id}
                  titulo={item.titulo}
                  precio={item.precio}
                  imagen={item.imagen}
                  cantidad={item.cantidad}
                  subtotal={item.subTotal}
                />
              )}
            </Container>
  
  
            <Container>
              <h2>Total :$ {precioTotal}</h2>
              <Button variant="danger" onClick={() => clearCart()}>Vaciar carrito</Button>
              <Button variant="danger" onClick={() => finishOrder()}>Comprar</Button>
            </Container>
          </Container>
        </div >
      )
  
    }
  
  }

  export default Cart;