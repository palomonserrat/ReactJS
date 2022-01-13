import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

function App() {
  const [itemsQty, setItemsQty] = useState(0);
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi Primer Tienda!
        </p>
        
        <div className="app">
    </div>
        <a
          className="App-link"
          href="https://plataforma.coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoderHouse
        </a>
      </header>
      <section style={{ marginBottom: 10 }}>
        <Button onClick={ () => setItemsQty (itemsQty - 1 ) } variant="success">-</Button>
        <span style={{ margin: 10, fontSize: "3rem" }}>{itemsQty}</span>
        <Button onClick={ () => setItemsQty (itemsQty + 1 ) } variant="success">+</Button>
      </section>
    </div>
    
  );
}


export default App;
