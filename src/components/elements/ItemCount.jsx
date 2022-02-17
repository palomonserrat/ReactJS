import React from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.stock)
    const [unidades , setUnidades] = useState(1)
    
    const sumaDeContador = {
        sumaStock:()=>{
            if (stock===0){
              console.log ("No hay suficiente stock")
            } else {
              setStock(stock-1)
              setUnidades(unidades+1)
            }
        }
    }
    
    const restaDeContador = {
        restaStock:()=>{
            if (unidades===0){
              console.log ("Sume unidades, el valor ingresado debe ser mayor a 0")
            } else {
              setUnidades(unidades-1)
              setStock(stock+1)
            }
        }
    }

    return (
        <div className="container">
        <div className="container justify-content-center display-flex col-12 p-2">
          <div className="container-fluid d-flex justify-content-center">
            <Card.Text>Stock disponible: {stock}</Card.Text>
          </div>
  
          <div className="container d-flex justify-content-between col-10 col-md-8 col-lg-6 p-2">
            <button className="btn btn-danger bg-gradient" onClick={restaDeContador.restaStock} disabled={stock==="0"}>-</button>
            <h5>{unidades}</h5>
            <button className="btn btn-danger bg-gradient" onClick={sumaDeContador.sumaStock} disabled={stock==="0"}>+</button>
          </div>
  
          <div className="container d-flex justify-content-center">
            <Button className="col-12 col-md-9 col-lg-6 p-2" variant="dark bg-gradient" onClick={()=>props.onAdd({unidades})}>
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    )
  
}


export default ItemCount;