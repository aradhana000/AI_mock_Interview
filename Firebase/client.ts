
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDUXH1vbnh9akmnLENFAtM9LCNIqVBZ1M8",
  authDomain: "prowise-c32c8.firebaseapp.com",
  projectId: "prowise-c32c8",
  storageBucket: "prowise-c32c8.firebasestorage.app",
  messagingSenderId: "965408892679",
  appId: "1:965408892679:web:8e49f61af3997e3cac87a2",
  measurementId: "G-5PN163M8F5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);

