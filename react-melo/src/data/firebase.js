import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_16OFZ2ybzSMps4rSE47zGND7chbKInY",
  authDomain: "react-melo.firebaseapp.com",
  projectId: "react-melo",
  storageBucket: "react-melo.firebasestorage.app",
  messagingSenderId: "112257693746",
  appId: "1:112257693746:web:8decdc5eb76be5392ca42b",
  measurementId: "G-3MWCYCYRZC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);