// import firebase from node
import firebase from "firebase";
// firebase config from google account
const firebaseConfig = {
  apiKey: "AIzaSyAjb8rZQ3U0Ii-jIby2wCIcpmS6d44q5hI",
  authDomain: "featurefield-9a72e.firebaseapp.com",
  databaseURL: "https://featurefield-9a72e.firebaseio.com",
  projectId: "featurefield-9a72e",
  storageBucket: "featurefield-9a72e.appspot.com",
  messagingSenderId: "111578997590",
  appId: "1:111578997590:web:48d0dda475856d94c2ecf7",
  measurementId: "G-EZEL5T6DXB",
};
// init app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// connect to firestore
const db = firebaseApp.firestore();
// firebase auth handler
const auth = firebase.auth();
// google auth
const provider = new firebase.auth.GoogleAuthProvider();

// exports
export { auth, provider, firebaseApp };
export default db;
