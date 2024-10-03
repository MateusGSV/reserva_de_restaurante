
  // Import the functions you need from the SDKs you need
    //import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
    //import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
    //import { initializeApp } from "firebase/app";
    //import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBoXgSbdOlV-MdBdc8BGZaBvhueFf4mqkk",
        authDomain: "faculdade-5c662.firebaseapp.com",
        projectId: "faculdade-5c662",
        storageBucket: "faculdade-5c662.appspot.com",
        messagingSenderId: "446310855350",
        appId: "1:446310855350:web:b5a907e54d6827b9866c17",
        measurementId: "G-XE3MD8VT7V"
    };

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  //const db = getFirestore(app);
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  //export { db };
