import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_3B4nwQg0tGzRQ1RyZbSVdrfP15f6L_M",
  authDomain: "it-study-97daa.firebaseapp.com",
  projectId: "it-study-97daa",
  storageBucket: "it-study-97daa.appspot.com",
  messagingSenderId: "391494167017",
  appId: "1:391494167017:web:a8178461deedb9c2f90378",
  measurementId: "G-963MRQ8G0Y"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);