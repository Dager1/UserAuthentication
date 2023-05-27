// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj5iAl0G7fmoUDimbAwrSmeaWKDV0JI3g",
  authDomain: "learning-3a40c.firebaseapp.com",
  projectId: "learning-3a40c",
  storageBucket: "learning-3a40c.appspot.com",
  messagingSenderId: "181686386927",
  appId: "1:181686386927:web:4827b1b92bc9ef3e681b1a",
  measurementId: "G-0493M3WYDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
// export default auth;
