// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ON4ho44kvLXIem7JVUgnU4hWOVAhgF8",
  authDomain: "ecommerce-website-a3229.firebaseapp.com",
  projectId: "ecommerce-website-a3229",
  storageBucket: "ecommerce-website-a3229.appspot.com",
  messagingSenderId: "87890394314",
  appId: "1:87890394314:web:fcc68ca5d577d2f0e1c833",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
