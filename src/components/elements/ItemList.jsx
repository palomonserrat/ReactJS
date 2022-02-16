import React from "react";
import Item from "../elements/Item";
import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col  } from "react-bootstrap";
import ItemListContainer from "../sections/ItemListContainer";

const ItemList = ({ items }) => {
    return (
      <div className="container-fluid">
        <div className="row">
          {items.map((item) =>
            <Item
              key={item.id}
              titulo={item.title}
              imagen={item.imageURL}
              precio={item.price}
              categoria={item.category}
              id={item.id}
  
            />)}
        </div>
      </div>
    )
  }
  

export default ItemList;

