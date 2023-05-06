
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApZ2W7TX3RokhWbQAveofLDUKbSd_zHjc",
  authDomain: "notes-app-e61d4.firebaseapp.com",
  projectId: "notes-app-e61d4",
  storageBucket: "notes-app-e61d4.appspot.com",
  messagingSenderId: "62818426789",
  appId: "1:62818426789:web:8f758fd5113c8f7dde524c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")