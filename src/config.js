// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMuvEZUhkni2XcB_RKQZK84iEpgAeDUC4",
  authDomain: "viva-15791.firebaseapp.com",
  projectId: "viva-15791",
  storageBucket: "viva-15791.appspot.com",
  messagingSenderId: "59658413057",
  appId: "1:59658413057:web:e63dda961b6861cec8cc00",
  measurementId: "G-2FSET2PGX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);