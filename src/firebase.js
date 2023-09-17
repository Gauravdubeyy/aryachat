import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVsa3ussQ0WN8MPqSAe64Zj9pgL89uiSs",
  authDomain: "arya-f94d6.firebaseapp.com",
  projectId: "arya-f94d6",
  storageBucket: "arya-f94d6.appspot.com",
  messagingSenderId: "458934814498",
  appId: "1:458934814498:web:b1a64f6faad3c782f7c77b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
