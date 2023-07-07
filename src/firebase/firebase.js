import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVHfoBFogel6wQLLPiqiX8mTddctOZu8s",
  authDomain: "biacol-app.firebaseapp.com",
  projectId: "biacol-app",
  storageBucket: "biacol-app.appspot.com",
  messagingSenderId: "364739255757",
  appId: "1:364739255757:web:5b540c3280ff6e79a6f884"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}