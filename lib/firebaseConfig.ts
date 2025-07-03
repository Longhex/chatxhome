import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzhI9Hheznc38s12c9f7BHNs0MhmS3oMs",
  authDomain: "chatx-d6661.firebaseapp.com",
  databaseURL: "https://chatx-d6661-default-rtdb.firebaseio.com",
  projectId: "chatx-d6661",
  storageBucket: "chatx-d6661.firebasestorage.app",
  messagingSenderId: "623290581924",
  appId: "1:623290581924:web:7a68dd177f29a251d23731",
  measurementId: "G-HW06M6JRLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };