import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQA7QFkvc7VLmc5ZdQ1kaYVUuRn9dcHR8",
  authDomain: "z-electro-8c189.firebaseapp.com",
  projectId: "z-electro-8c189",
  storageBucket: "z-electro-8c189.firebasestorage.app",
  messagingSenderId: "1002080143963",
  appId: "1:1002080143963:web:d0eedaa15f19be4b224d7e",
  measurementId: "G-YNXZSN9FKL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 