import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkD6vaZlR5IiMDl4t00P4Lx3vgdpNzans",
  authDomain: "quiz-app-620.firebaseapp.com",
  projectId: "quiz-app-620",
  storageBucket: "quiz-app-620.appspot.com",
  messagingSenderId: "650520093029",
  appId: "1:650520093029:web:1fe52cb0d5ffd2bc7c018c",
  measurementId: "G-6DF69ECVXY"
};

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
