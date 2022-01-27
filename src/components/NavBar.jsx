import React from "react";
import CartWidget from "./CartWidget";

class NavBar extends React.Component {
    render() {
        const customStyle = {
            backgroundColor: "lightBlue",
            padding: 10,
        }
        return(
            <fragment>
                <div style={customStyle}>
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Morkstar Bookstore</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Shop All</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Our Selection</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                                </li>
                            </ul>
                            </div>
                            <CartWidget />
                        </div>
                    </nav>
                </div>
                
            </fragment>
        )
    }
}

export default NavBar;