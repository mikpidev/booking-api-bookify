// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPGPSscDZiT2dZ4J66EBoygJEnLRmVAOU",
  authDomain: "api-bookify-ad11e.firebaseapp.com",
  projectId: "api-bookify-ad11e",
  storageBucket: "api-bookify-ad11e.firebasestorage.app",
  messagingSenderId: "992625240684",
  appId: "1:992625240684:web:ed353af7359124ab254649"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;