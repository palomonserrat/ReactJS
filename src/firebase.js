import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFbPBDepz4QY3aylU6EslAg-_Jbw1hnV8",
  authDomain: "tienda-coderhouse-pp.firebaseapp.com",
  projectId: "tienda-coderhouse-pp",
  storageBucket: "tienda-coderhouse-pp.appspot.com",
  messagingSenderId: "189090199999",
  appId: "1:189090199999:web:ff8369c93f363c59dcc90a"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
  return firebase.firestore(app)
}