// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD45nm8Yc6GFt08hAoYD_fc00wTx-4Ubhg",
  authDomain: "yourflix-73b81.firebaseapp.com",
  projectId: "yourflix-73b81",
  storageBucket: "yourflix-73b81.appspot.com",
  messagingSenderId: "877756406873",
  appId: "1:877756406873:web:2bd2858d233c2de00da548"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);