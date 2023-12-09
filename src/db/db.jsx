import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6egFXr9MML1SpLknIFoOUC0vY5JvcH3g",
    authDomain: "proyecto-react-16f58.firebaseapp.com",
    projectId: "proyecto-react-16f58",
    storageBucket: "proyecto-react-16f58.appspot.com",
    messagingSenderId: "855464346340",
    appId: "1:855464346340:web:ed77fae95d1132c17862f1"
  };

 initializeApp(firebaseConfig);

 export const db = getFirestore()

