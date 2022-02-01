import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/NoPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContext, CartProvider } from './components/CartContext';

const App = () => {
  return (
    <div className="App">     
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Home /> } />
      
          <Route path="*" element={ <NoPage /> } />
          <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
