import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtlGulsRsbfQju-2ftRyiY8AhBWK48KEY",
  authDomain: "blogdev-am.firebaseapp.com",
  projectId: "blogdev-am",
  storageBucket: "blogdev-am.appspot.com",
  messagingSenderId: "40226309282",
  appId: "1:40226309282:web:168430160189a99ad9c3fb",
  measurementId: "G-8R62LS0BFG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}