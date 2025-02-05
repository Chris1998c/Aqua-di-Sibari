// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJMOUlb6GlMxifb8S8c6dVuzjH5i9pt1g",
  authDomain: "aqua-di-sibari.firebaseapp.com",
  projectId: "aqua-di-sibari",
  storageBucket: "aqua-di-sibari.appspot.com",
  messagingSenderId: "286806023042",
  appId: "1:286806023042:web:736945d4f457f79a858d9b",
  measurementId: "G-BS7X3FYKHX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
