import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  query,
  where
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC_16OFZ2ybzSMps4rSE47zGND7chbKInY",
  authDomain: "react-melo.firebaseapp.com",
  projectId: "react-melo",
  storageBucket: "react-melo.firebasestorage.app",
  messagingSenderId: "112257693746",
  appId: "1:112257693746:web:8decdc5eb76be5392ca42b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export async function getData() {
  const ref = collection(db, "products");
  const snap = await getDocs(ref);

  return snap.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
}


export async function getItemData(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error("Producto no encontrado");
  }

  return {
    ...snap.data(),
    id: snap.id
  };
}

export async function getCategoryData(categoryID) {
  const ref = collection(db, "products");
  const q = query(ref, where("category", "==", categoryID));
  const snap = await getDocs(q);

  return snap.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
}

export async function createBuyOrder(buyOrderData) {
  const ref = collection(db, "orders");
  const docRef = await addDoc(ref, buyOrderData);

  alert(`Gracias por tu compra! ID: ${docRef.id}`);
  return docRef.id;
}
