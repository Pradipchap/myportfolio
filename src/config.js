// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM71bUhnPb8kfTiPuP77cmEpy1DPV5l80",
  authDomain: "myportfolio-aad33.firebaseapp.com",
  projectId: "myportfolio-aad33",
  storageBucket: "myportfolio-aad33.appspot.com",
  messagingSenderId: "448074040536",
  appId: "1:448074040536:web:2a9024c2904adf691c83ad",
  measurementId: "G-QKDLJ4KY36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);