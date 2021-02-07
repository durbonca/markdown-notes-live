// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_KEY,
  authDomain: "markdown-notes-live.firebaseapp.com",
  projectId: "markdown-notes-live",
  storageBucket: "markdown-notes-live.appspot.com",
  messagingSenderId: "1027042244128",
  appId: "1:1027042244128:web:f401e19872eae5d3e02e45"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
