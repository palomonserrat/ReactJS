import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/sections/Home';
import NoPage from './components/sections/NoPage';
import ItemDetailContainer from './components/sections/ItemDetailContainer';
import { CartContext} from './components/contexts/CartContext';
import { CartProvider} from './components/contexts/CartProvider';



import Cart from './components/elements/Cart'

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
