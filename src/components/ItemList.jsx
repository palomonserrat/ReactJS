import React from "react"
import Item from "./Item";


function ItemList() {
    const promise1 = new Promise((resolve, reject) => setTimeout( () => {
        resolve("funciono");
        reject("error")
    }, 2000)
    );
    promise1.finally(console.log("finalizó"));
    return(
        <Item />
    )
}

export default ItemList;