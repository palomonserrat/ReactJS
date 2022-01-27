import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/NoPage';


const App = () => {
  return (
    <div className="App">     
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Home /> } />
        <Route path="*" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
