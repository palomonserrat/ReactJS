import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi Primer Tienda!
        </p>
        <a
          className="App-link"
          href="https://plataforma.coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoderHouse
        </a>
      </header>
      
    </div>
    
  );
}

export default App;
