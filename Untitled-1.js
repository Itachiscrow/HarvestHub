 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDyNyJn529YSuDPshcbjjxuRdy3sDVirVU",
   authDomain: "harvesthub-6b6bb.firebaseapp.com",
   projectId: "harvesthub-6b6bb",
   storageBucket: "harvesthub-6b6bb.appspot.com",
   messagingSenderId: "1040448063809",
   appId: "1:1040448063809:web:a29565d410a384218a39c0",
   measurementId: "G-Z3MR5S68R3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
