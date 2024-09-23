// Importa le funzioni necessarie dai SDK di Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Aggiungi l'importazione per Firestore

// Configurazione della tua web app di Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJMOUlb6GlMxifb8S8c6dVuzjH5i9pt1g",
  authDomain: "aqua-di-sibari.firebaseapp.com",
  projectId: "aqua-di-sibari",
  storageBucket: "aqua-di-sibari.appspot.com",
  messagingSenderId: "286806023042",
  appId: "1:286806023042:web:736945d4f457f79a858d9b",
  measurementId: "G-BS7X3FYKHX"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inizializza Firestore
const db = getFirestore(app); // Aggiungi questa riga per Firestore

// Esporta il database e le altre funzionalità se necessario
export { db }; // Assicurati di esportare db se lo utilizzi in altri file
