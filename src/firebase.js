// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ important

const firebaseConfig = {
  apiKey: "AIzaSyA5h0yM6hMhiYCG-09XMN117DDqV81FIPA",
  authDomain: "z-store-c24e7.firebaseapp.com",
  projectId: "z-store-c24e7",
  storageBucket: "z-store-c24e7.appspot.com",
  messagingSenderId: "557658394258",
  appId: "1:557658394258:web:1518f2405ea73fd0af604b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Correct auth export
export const auth = getAuth(app);