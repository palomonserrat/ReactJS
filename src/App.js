import NavBar from "../src/components/elements/NavBar"
import React from "react"
import Cart from "../src/components/elements/Cart"
import ItemDetailContainer from "../src/components/sections/ItemDetailContainer"
import { FuncionCarrito } from "../src/components/contexts/CartContext";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ItemListContainer from "../src/components/sections/ItemListContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <FuncionCarrito>
        <div className="container">

          <NavBar />

          <Routes>

            <Route exact path="/" element={<ItemListContainer/>}></Route>

            <Route exact path="/cart" element={<Cart/>}></Route>

            <Route path="/:categoria" element={<ItemListContainer/>}></Route>

            <Route path="/:categoria/:id" element={<ItemDetailContainer />}></Route>

          </Routes>
        </div>
      </FuncionCarrito>
    </Router>
  )
}

export default App;
