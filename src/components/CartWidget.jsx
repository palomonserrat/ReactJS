import React from "react";


class CartWidget extends React.Component {
    render () {
        const customStyle = {
            width: 20,
            height: "auto",
        }
        return(
            <img style={customStyle} src={require('../assets/cartImg.png')} />
            
        )
    }
}

export default CartWidget;