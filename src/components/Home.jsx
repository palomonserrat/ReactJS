import { useState, useEffect } from 'react';
import { getProductsFromCategory } from '../services/products';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import Loading from './Loading';
import { collection, getDoc,  getDocs, query, where } from "firebase/firestore"
import { db } from '../firebase'


const Home = () => {

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

  useEffect(() => {
    const getFromFirebase = async () => {
      const query = collection(db, "items")
      const snapshot = await getDocs(query)
      snapshot.forEach((doc) => {
        console.log(doc.data())
      })
    }
  })

  return (
    <div className="App"> 
      <NavBar />    
      <ItemListContainer products={products} />
      {loading ? <Loading /> : null}
    </div>
  );
}

export default Home;