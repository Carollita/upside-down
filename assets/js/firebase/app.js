  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAQL6E7-jAVbGPPMTDPS4ZLpsaP4qPBmNo",
    authDomain: "upside-down-bb84c.firebaseapp.com",
    projectId: "upside-down-bb84c",
    storageBucket: "upside-down-bb84c.appspot.com",
    messagingSenderId: "135602641841",
    appId: "1:135602641841:web:02d6fa97ffa38d0396bb90"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app;