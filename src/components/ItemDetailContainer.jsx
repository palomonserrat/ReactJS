import { useOutletContext, useParams } from "react-router-dom";
import { getProductDetail, getProductDescription } from "../services/products";
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { CartProvider } from "./CartContext";

const ItemDetailContainer = () => {
    const { id } = useParams();
  /*  const [setLoading] = useOutletContext(); */
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let mounted = true
   /*     setLoading(true) */
        Promise.all([ getProductDetail(id), getProductDescription(id) ])
        .then(results => {
            let item = results[0]
            item.description = results[1].plain_text
            if (mounted) {
                setProduct(item)
                setTimeout(() => {
    /*              setLoading(false)  */
                }, 3000)
            }
        })
        return () => mounted = false
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? <CartProvider> <ItemDetail product={product} /> </CartProvider>  : null }
        </div>
    )
}

export default ItemDetailContainer;