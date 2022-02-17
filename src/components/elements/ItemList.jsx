import React from "react";
import Item from "../elements/Item";
import 'bootstrap/dist/css/bootstrap.min.css';

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

