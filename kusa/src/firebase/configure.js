import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZv6isa_6G9ysBSjaPA9_fgITkXYs57_c",
  authDomain: "kusa-102ed.firebaseapp.com",
  projectId: "kusa-102ed",
  storageBucket: "kusa-102ed.appspot.com",
  messagingSenderId: "584680370744",
  appId: "1:584680370744:web:36ce72ad140d181ebfeccd",
};

//init app
initializeApp(firebaseConfig);

//init services
const database = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { database, auth, storage };
