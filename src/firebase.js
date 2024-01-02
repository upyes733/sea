// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2dilo5EMk2Ms8sRTd93UsAVgbwc6dfr0",
  authDomain: "learnconnect21.firebaseapp.com",
  projectId: "learnconnect21",
  storageBucket: "learnconnect21.appspot.com",
  messagingSenderId: "581303040796",
  appId: "1:581303040796:web:f5c4f836ff944b6cc398d9",
  measurementId: "G-802YG04W4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();