// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyALVQK4bmceJWMIaeKJL0Oqf0QQVeAslrw",
  authDomain: "wodstar-f7df7.firebaseapp.com",
  projectId: "wodstar-f7df7",
  storageBucket: "wodstar-f7df7.firebasestorage.app",
  messagingSenderId: "18427846889",
  appId: "1:18427846889:web:7971e22071bf364fbe5078"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
