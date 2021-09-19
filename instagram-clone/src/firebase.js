// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwnkfyb0fB5nROkse-NuuYwtddIZugCvc",
  authDomain: "instagram-clone-3b34f.firebaseapp.com",
  projectId: "instagram-clone-3b34f",
  storageBucket: "instagram-clone-3b34f.appspot.com",
  messagingSenderId: "761499964190",
  appId: "1:761499964190:web:c7492996c01de26161af0f",
  measurementId: "G-VWMW050NC3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
