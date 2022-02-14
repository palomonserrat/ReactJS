import { useState, useEffect } from 'react';
import { getProductsFromCategory } from '../../services/products';
import ItemListContainer from './ItemListContainer';
import NavBar from '../elements/NavBar';
import Loading from '../elements/Loading';
import { collection, getDoc,  getDocs, query, where, doc } from "firebase/firestore"
import { db } from '../../firebase'


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
      const query = (collection(db, "items"), where("name", "==", "A Little Life"))
      const snapshot = await getDocs(query)
      snapshot.forEach((doc) => {
        console.log(doc.data());
      })

      snapshot.map(doc => {
        console.log(doc.data());
      })

      const docRef = doc(db, "items", "lTyImmiWUBBR76NAIjXK")
      const docSnapshot = await getDoc(docRef)
      console.log(docSnapshot.data());
    }

    getFromFirebase()
  },[]);

  return (
    <div className="App"> 
      <NavBar />    
      <ItemListContainer products={products} />
      {loading ? <Loading /> : null}
    </div>
  );
}

export default Home;