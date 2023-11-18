import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEjG91X1krP0UKVBbIFcYsPDuT3Ai9yOA",
  authDomain: "black-santa-31873.firebaseapp.com",
  projectId: "black-santa-31873",
  storageBucket: "black-santa-31873.appspot.com",
  messagingSenderId: "221215289585",
  appId: "1:221215289585:web:8670f21e7b7b98ce4f7950",
  measurementId: "G-Q7Z558ZDV1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };