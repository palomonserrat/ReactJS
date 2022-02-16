import { useOutletContext, useParams } from "react-router-dom";
import { getProductDetail, getProductDescription } from "../../services/products";
import { useEffect, useState } from 'react';
import ItemDetail from '../elements/ItemDetail';
import { getFirestore } from "../../firebase"
import Loading from '../elements/Loading';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
  
    const { id } = useParams()
  
    useEffect(() => {
      const db = getFirestore()
      const itemCollection = db.collection("items")
      const item = itemCollection.doc(id)
  
      item.get().then((doc) => {
        if (!doc.exists) {
          console.log("El producto no existe")
          return
        }
        setProducto({ id: doc.id, ...doc.data() })
        setCargando(false)
      }).catch((error) => {
        console.log("Error en la busqueda de productos", error)
      })
      return {}
  
    }, [id])
  
    return (
      <>
        {cargando ? < Loading /> :
          <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
            < ItemDetail
              key={`detalle-${producto.id}`}
              titulo={producto.title}
              imagen={producto.imageURL}
              descr={producto.description}
              precio={producto.price}
              stock={producto.stock}
              id={producto.id}
            />
          </div>
        }
      </>
    )
  }

export default ItemDetailContainer;