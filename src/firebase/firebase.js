// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJzFa73zt5jcMfOlDmvO503zt-sn_y0aA",
  authDomain: "blog-bc3b2.firebaseapp.com",
  databaseURL: "https://blog-bc3b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-bc3b2",
  storageBucket: "blog-bc3b2.appspot.com",
  messagingSenderId: "545078579099",
  appId: "1:545078579099:web:e3c1db5d2fb2e426541b3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);