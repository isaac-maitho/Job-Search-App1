import { initializeApp } from "firebase/app";
import { getFirestore } from 'firbase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBz6OUm14SYmWn1wxKZvVfgNIK_1cXmATY",
  authDomain: "job-search-app-bac1b.firebaseapp.com",
  projectId: "job-search-app-bac1b",
  storageBucket: "job-search-app-bac1b.appspot.com",
  messagingSenderId: "843819615231",
  appId: "1:843819615231:web:e44f9e7135c932dd3b9dca"
};


initializeApp(firebaseConfig);
export const db = getFirestore()