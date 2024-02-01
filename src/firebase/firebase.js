// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPSfttHb3aOWG3X7zmTA9_-d_QhlBglY8",
  authDomain: "adminpanel-98cc8.firebaseapp.com",
  projectId: "adminpanel-98cc8",
  storageBucket: "adminpanel-98cc8.appspot.com",
  messagingSenderId: "14736445516",
  appId: "1:14736445516:web:38cbd520a7791c6c1164e9",
  measurementId: "G-WNZDCD70B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);