import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/NoPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContext, CartProvider } from './components/CartContext';
import Cart from './components/Cart'

const App = () => {
  return (
    <CartProvider>     
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="*" element={ <NoPage /> } />
          <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
          <Route path="/cart" exact element={ <Cart /> } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
