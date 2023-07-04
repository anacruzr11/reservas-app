import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALQnouo6AxpGQ7DsBN6JJ5lLnMJT2JjMM",
  authDomain: "reservas-app-928b4.firebaseapp.com",
  projectId: "reservas-app-928b4",
  storageBucket: "reservas-app-928b4.appspot.com",
  messagingSenderId: "463719778004",
  appId: "1:463719778004:web:88b7f64431be4c0c8d1d41"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}