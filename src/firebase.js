import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWJ-KGZC8LEdfHi-46gBeTHgmcbXRAmog",
    authDomain: "facebook-app-4c8d0.firebaseapp.com",
    databaseURL: "https://facebook-app-4c8d0.firebaseio.com",
    projectId: "facebook-app-4c8d0",
    storageBucket: "facebook-app-4c8d0.appspot.com",
    messagingSenderId: "341611296334",
    appId: "1:341611296334:web:25c269cbbc3a18b0d5751f",
    measurementId: "G-EXSMJJN9W8"
  });
  
  const db = firebaseApp.firestore();

  export default db;