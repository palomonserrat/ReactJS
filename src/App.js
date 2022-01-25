import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { getProductsFromCategory } from './services/products';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getProductsFromCategory("MLA", "MLA3025").then(items => {
      if(mounted) {
        console.log(items.results)
        setProducts(items.results)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">     
      <NavBar />
      <ItemListContainer products={products} />
    </div>
  );
}

export default App;
