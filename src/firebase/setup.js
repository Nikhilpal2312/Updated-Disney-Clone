// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFyNGLd6fupz2VTfbUIPgtkICcgXdldmo",
  authDomain: "disney-clone-27148.firebaseapp.com",
  projectId: "disney-clone-27148",
  storageBucket: "disney-clone-27148.appspot.com",
  messagingSenderId: "208676986159",
  appId: "1:208676986159:web:b5edf032427617b1be15da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);