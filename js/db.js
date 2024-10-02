// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcF01oN30vD0YjknMOwxuKPZCwsHRkhXM",
    authDomain: "reserva-de-restaurante-bfec4.firebaseapp.com",
    projectId: "reserva-de-restaurante-bfec4",
    storageBucket: "reserva-de-restaurante-bfec4.appspot.com",
    messagingSenderId: "323448300735",
    appId: "1:323448300735:web:c52c3c1b3ffddebb91920a",
    measurementId: "G-VJY6FMG42M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
