import {useState} from 'react'
import { CartContext } from './CartContext'

export const  CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
    const [subTotal, setSubTotal] = useState(0)

        function addItem (producto, qty)  {
            const itemExiste = cart.find(item => item.id === producto.id)
            if (!itemExiste) {
                setCart([...cart, {id:producto.id, nombre:producto.title, foto:producto.picture, precio:producto.price, cantidad:qty, subTotal:(producto.precio*qty)}])
                setUnidadesSeleccionadas(unidadesSeleccionadas + qty)
                setSubTotal(subTotal+(producto.precio*qty))
            } else {
                const cartActualizado = cart.map(item => {
                    
                    if (item.id === producto.id) {
                        item.cantidad += qty
                        item.subTotal += (producto.precio*qty) 
                        
                    }
                    return item
                })
                setUnidadesSeleccionadas(unidadesSeleccionadas + qty)
                setCart(cartActualizado)
                console.log(cartActualizado)
                setSubTotal(subTotal+(producto.precio*qty))
            }
        }

        function removeItem (id, cantidad, precio)  {
            const nuevoCart = cart.filter((item) => item.id !== id)
        setCart (nuevoCart)
        setSubTotal(subTotal-(cantidad*precio))
        setUnidadesSeleccionadas(unidadesSeleccionadas - 1)
        }

        function clear () {
            setCart([])
            setUnidadesSeleccionadas(0)
            setSubTotal(0)        
        }
    

    return (<CartContext.Provider value={{cart, unidadesSeleccionadas, subTotal, addItem, removeItem, clear}} >
            {children}
            </CartContext.Provider>
        )
}