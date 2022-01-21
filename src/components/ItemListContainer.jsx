import React from "react";
import ItemList from "./ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemListContainer extends React.Component {
    render () {
        return(
            <>
                <ItemList />
            </>
        )
    }
}

export default ItemListContainer;