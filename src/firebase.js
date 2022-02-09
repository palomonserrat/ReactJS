// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbPBDepz4QY3aylU6EslAg-_Jbw1hnV8",
  authDomain: "tienda-coderhouse-pp.firebaseapp.com",
  projectId: "tienda-coderhouse-pp",
  storageBucket: "tienda-coderhouse-pp.appspot.com",
  messagingSenderId: "189090199999",
  appId: "1:189090199999:web:ff8369c93f363c59dcc90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);