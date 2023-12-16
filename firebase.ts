// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYKSxhlVm122NWphNNLbmfkwjqjiatHww",
  authDomain: "dropbox-clone-5c2f9.firebaseapp.com",
  projectId: "dropbox-clone-5c2f9",
  storageBucket: "dropbox-clone-5c2f9.appspot.com",
  messagingSenderId: "818035550263",
  appId: "1:818035550263:web:91d36a826c4269dcc8b7b2",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
