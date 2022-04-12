// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNi1Rk4mIM_YRT-eFME1FIpXd00GQUTUE",
  authDomain: "ema-john-simple-95a8b.firebaseapp.com",
  projectId: "ema-john-simple-95a8b",
  storageBucket: "ema-john-simple-95a8b.appspot.com",
  messagingSenderId: "144927506556",
  appId: "1:144927506556:web:fa308eb2670cec11c909f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;