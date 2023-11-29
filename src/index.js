import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />

);
const firebaseConfig = {
    apiKey: "AIzaSyC6egFXr9MML1SpLknIFoOUC0vY5JvcH3g",
    authDomain: "proyecto-react-16f58.firebaseapp.com",
    projectId: "proyecto-react-16f58",
    storageBucket: "proyecto-react-16f58.appspot.com",
    messagingSenderId: "855464346340",
    appId: "1:855464346340:web:ed77fae95d1132c17862f1"
  };

 initializeApp(firebaseConfig);

 const db = getFirestore()


const getProductos = async () => {
    const productos = await getDocs(collection(db, "items"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id:prod.id}
    })
    return items
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "items", id))
    const item = {...producto.data(), id:producto.id}
    return item
}

export default db
