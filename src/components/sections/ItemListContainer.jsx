import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../elements/ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestore } from "../../firebase";
import Loading from '../elements/Loading';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoria } = useParams()
  
    useEffect(() => {
      if (categoria) {
        const dbQuery = getFirestore()
        dbQuery.collection('items').where('categoria', '==', categoria).get()
          .then(resp => {
            setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
            setCargando(false)
          })
          .catch(err => console.log(err))
      } else {
        const dbQuery = getFirestore()
        dbQuery.collection('items').get()
          .then(resp => {
            setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
            setCargando(false)
          })
          .catch(err => console.log(err))
      }
    }, [categoria])
  
    return (
      <>
        {
          cargando ?
            <Loading />
            :
            <div className="container-fluid">
              <div className="row">
                <ItemList items={productos} />
              </div>
            </div>
        }
      </>
    )
  }

export default ItemListContainer;