// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe6lXk7lB-WKsiXgZNOWltKit8CilsOEE",
  authDomain: "e-commerce-2906d.firebaseapp.com",
  projectId: "e-commerce-2906d",
  storageBucket: "e-commerce-2906d.appspot.com",
  messagingSenderId: "18043786169",
  appId: "1:18043786169:web:b9c64430b02516d10fdc68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;