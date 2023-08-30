// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQotguG1qY8z_P5YYnypWiKKWuM0gYH5c",
  authDomain: "wedding-invitation-ad008.firebaseapp.com",
  projectId: "wedding-invitation-ad008",
  storageBucket: "wedding-invitation-ad008.appspot.com",
  messagingSenderId: "921578909527",
  appId: "1:921578909527:web:144e5b78f7e64372241812",
  measurementId: "G-20F76373ST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
