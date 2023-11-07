// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5m1LVPBk8nlD9YVEyygvDTwwnbnHFNLA",
  authDomain: "reactecom-4415b.firebaseapp.com",
  projectId: "reactecom-4415b",
  storageBucket: "reactecom-4415b.appspot.com",
  messagingSenderId: "195883254669",
  appId: "1:195883254669:web:f258523ac412ffbac673c4",
  measurementId: "G-LPRDM7NF8D",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);
console.log(JSON.stringify(storage));
export { storage, db as default };
