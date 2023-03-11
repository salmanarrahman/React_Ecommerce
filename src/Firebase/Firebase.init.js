// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIeLye11VMag8LM1qMBm3KOG7IUHg9OoI",
    authDomain: "genius-car-aa85e.firebaseapp.com",
    projectId: "genius-car-aa85e",
    storageBucket: "genius-car-aa85e.appspot.com",
    messagingSenderId: "988957360048",
    appId: "1:988957360048:web:870469240b77de49246075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;